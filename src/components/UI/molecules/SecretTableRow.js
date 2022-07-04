import { React, useState } from "react";
import { Button } from "react-bootstrap";
import {toHumanReadable} from "../../../utils/Dates";

const SecretEntry = ({ secret }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => setActive(true)}
        className={active ? "d-none" : null}
      >
        Show Secret
      </Button>
      <p className={!active ? "d-none" : null}>{secret}</p>
    </>
  );
};

const SecretTableRow = ({ name, id, date, secret, openDeleteModal }) => {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{toHumanReadable(date)}</td>
      <td>
        <SecretEntry secret={secret} />
      </td>
      <td>
        <Button
          variant="warning"
          style={{ float: "right" }}
          onClick={() => {
            openDeleteModal({ name, id, date, secret });
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SecretTableRow;