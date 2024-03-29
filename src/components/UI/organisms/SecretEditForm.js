import React from "react";
import {Button, Form} from "react-bootstrap";

const SecretEditForm = ({name, text, file, setName, setText, setFile, handleSubmit, handleCancel}) => {
    return (
        <div data-testid = "edit-id">
            <h2>Edit Secret</h2>
            <Form>
                <Form.Group className={"mb-3"} controlId={"secretEditForm.SecretNameInput"}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        as={"input"}
                        type={"text"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"} controlId={"secretEditForm.SecretTextArea"}>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        as={"textarea"}
                        rows={5}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"} controlId={"secretEditForm.SecretFileUpload"}>
                    <Form.Label>Files</Form.Label>
                    <Form.Control
                        as={"input"}
                        type={"file"}
                        value={file}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </Form.Group>
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
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default SecretEditForm;