import React from "react";
import {Button, Form} from "react-bootstrap";

const SecretCreationForm = ({setName, setText, setFiles, handleSubmit, handleCancel}) => {
    return (
        <div>
            <h2>New Secret</h2>
            <Form>
                <Form.Group className={"mb-3"} controlId={"secretCreationForm.SecretNameInput"}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        as={"input"}
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"} controlId={"secretCreationForm.SecretTextArea"}>
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        as={"textarea"}
                        rows={5}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"} controlId={"secretCreationForm.SecretFileUpload"}>
                    <Form.Label>Files</Form.Label>
                    <Form.Control
                        as={"input"}
                        type={"file"}
                        multiple
                        onChange={(e) => setFiles(e.target.files)}
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
                    Create
                </Button>
            </Form>
        </div>
    );
}

export default SecretCreationForm;