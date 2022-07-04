import { React } from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteSecretModal = ({ secret, close, show }) => {
  if (!secret) {
    return "";
  }
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Secret</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Secret {secret.name} created at {secret.date.toLocaleDateString()}
        </p>
        <p color="red">{secret.secret}</p>
        <p>Permanently delete this secret? You cannot undo this.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            close();
          }}
        >
          Close
        </Button>
        <Button variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteSecretModal;
