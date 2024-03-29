import auth from './auth/AuthenticationManager.js';
import fileUploader from './controller/FileUploadController.js';
import adminPanel from './controller/AdminPanelController.js'
import secretsManager from "./controller/SecretManagerController.js";
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from "helmet";

const app = express();
const port = 8000;
const env = config();

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                "default-src": ["'self'"],
                "style-src": ["'self'"],
                "font-src": ["'self'"],
                "frame-ancestors": ["'self'"],
                "form-action": ["'self'"],
            },
        },
    })
);

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));

if (process.env.NODE_ENV === 'development') {
  var corsOptions = {
    origin: function (origin, callback) {
      if (process.env.PRESENTATION_URL.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    optionsSuccessStatus: 200,
  }
  app.use(cors(corsOptions));
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use("/api/login", auth);
app.use("/api/venus", fileUploader)
app.use("/api/venus/admin", adminPanel)
app.use("/api/venus/secrets", secretsManager)

app.use((req, res, next) => {
    res.json({message: "Page not found"});
});

app.listen(port, () => {
  console.log("API_URL", process.env.API_URL);
  console.log(`Example app listening on port ${port}!`)
});