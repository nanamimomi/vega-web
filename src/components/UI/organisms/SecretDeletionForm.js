import React from "react";
import {Button} from "react-bootstrap";

const SecretDeletionForm = ({secret, handleSubmit, handleCancel}) => {
    return (
        <div>
            <h2>Delete Secret</h2>
            <p>Are you sure you want to permanently delete "{secret.name}"?</p>
            <Button
                variant={"primary"}
                type={"reset"}
                onClick={handleCancel}
            >
                Cancel
            </Button>
            <Button
                variant={"primary"}
                type={"submit"}
                onClick={handleSubmit}
            >
                Delete
            </Button>
        </div>
    )
}

export default SecretDeletionForm;