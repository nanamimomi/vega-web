import React from "react";
import {Button, Form} from "react-bootstrap";

const SecretDetailsForm = ({secret, handleClose}) => {
    return (
        <div>
            <h2>Secret Details</h2>
            <Form>
                <Form.Group className={"mb-3"} controlId={"secretDetailsForm.SecretName"}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        as={"input"}
                        type={"text"}
                        disabled
                        value={secret.name}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"} controlId={"secretCreationForm.SecretTextArea"}>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        as={"textarea"}
                        rows={5}
                        disabled
                        value={secret.text}
                    />
                </Form.Group>
                {secret.files.getAll("file").map((file) => <a href={URL.createObjectURL(file)} download style={{display: "block"}}>{file.name}</a>)}
                <Button
                    variant={"primary"}
                    type={"submit"}
                    onClick={handleClose}
                >
                    Close
                </Button>
            </Form>
        </div>
    )
}

export default SecretDetailsForm;