## Startup

```console
foo@bar:~$ MODE=<development|production> docker-compose up --build
```

## Frontend

The frontend is written in React and served on port 3000. 

## Images

All the images that are used in the frontend application will be found under src/assets/images folder.

## Server

React frontend talks to backend which is written in nodejs "express.js". All the source code is under server folder.  The server is deployed to port 8000.

## Type of users (for login) 
- Public (can see only the public site)
- Registered users (user can register account and use scaled down pla.orm service)
- Staff
- Admin

## Admin Duties
- Enable Registered Users
- Can change Role of registered User to "Staff" or "User"
- Upload Files at Resource tab

## Staff
- Use Platform services
- Check resources tab to see uploaded files by admin


