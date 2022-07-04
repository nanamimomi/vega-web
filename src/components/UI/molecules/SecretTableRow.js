import React from "react";
import { Button } from "react-bootstrap";
import {toHumanReadable} from "../../../utils/Dates";

const SecretTableRow = ({ secret, handleShow, handleEdit, handleDelete }) => {
  return (
    <tr key={secret.secretID}>
      <td>{secret.secretName}</td>
      <td>{toHumanReadable(secret.dateCreated)}</td>
      <td>
        <Button
            variant={"primary"}
            type={"submit"}
            onClick={() => handleShow(secret)}
        >
            Show
        </Button>
      </td>
      <td>
        <Button
            variant={"primary"}
            type={"submit"}
            onClick={() => handleEdit(secret)}
        >
          Edit
        </Button>
      </td>
      <td>
        <Button
            variant={"primary"}
            type={"submit"}
            onClick={() => handleDelete(secret)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SecretTableRow;