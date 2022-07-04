import React, { useState } from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";
import SecretTable from "../UI/organisms/SecretTable";
import SecretTableRow from "../UI/molecules/SecretTableRow";
import { getAllSecrets } from "../../service/SecretManager/SecretManager";
import Modal from "../UI/atoms/Modal";
import SecretCreationForm from "../UI/organisms/SecretCreationForm";
import SecretEditForm from "../UI/organisms/SecretEditForm";
import SecretDeletionForm from "../UI/organisms/SecretDeletionForm";
import SecretDetailsForm from "../UI/organisms/SecretDetailsForm";
import { createSecret, updateSecret, deleteSecret } from "../../service/SecretManager/SecretManager";

const SECRET_TABLE_PAGE_SIZE = 10;
const SECRET_TABLE_MAX_NAV_BUTTONS = 5;

const SecretManager = () => {
  const currDate = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(currDate.getMonth() - 1);
  const [endDate, setEndDate] = useState(currDate);
  const [startDate, setStartDate] = useState(oneMonthAgo);

  const getDisplayedSecrets = (start, end) => {
    return getAllSecrets()
      .filter((s) => start <= s.date && s.date <= end)
      .sort((a, b) => b.date - a.date);
  };

  const secrets = getDisplayedSecrets(startDate, endDate);

  const numPages = Math.max(
    1,
    Math.ceil(secrets.length / SECRET_TABLE_PAGE_SIZE)
  );

  const [currPage, setCurrPage] = useState(1);
  if (currPage > numPages) {
    setCurrPage(numPages);
  }

  const [newSecretName, setNewSecretName] = useState(null);
  const [newSecretText, setNewSecretText] = useState(null);
  const [newSecretFiles, setNewSecretFiles] = useState([]);
  const newSecretFileFormData = new FormData();
  for(let i = 0; i < newSecretFiles.length; i++) {
      newSecretFileFormData.append("file", newSecretFiles[i]);
  }

  const [isSecretCreationModalVisible, setSecretCreationModalVisible] = useState(false);
  const [editSecretName, setEditSecretName] = useState(null);
  const [editSecretText, setEditSecretText] = useState(null);
  const [editSecretFiles, setEditSecretFiles] = useState([]);
  const editSecretFileFormData = new FormData();
  for(let i = 0; i < editSecretFiles.length; i++) {
    editSecretFileFormData.append("file", editSecretFiles[i]);
  }

  const [isSecretEditModalVisible, setSecretEditModalVisible] = useState(false);

  const [isSecretDeletionModalVisible, setSecretDeletionModalVisible] = useState(false);
  const [selectedSecret, setSelectedSecret] = useState(null);

  const [isSecretDetailsModalVisible, setSecretDetailsModalVisible] = useState(false);

  const openSecretCreationModal = () => {
    setSecretCreationModalVisible(true);
  };

  const closeSecretCreationModal = () => {
    setSecretCreationModalVisible(false);
  };

  const openEditModal = (s) => {
    setSelectedSecret(s);
    setSecretEditModalVisible(true);
  };

  const closeEditModal = () => {
    setSecretEditModalVisible(false);
  };

  const openDeleteModal = (s) => {
    setSelectedSecret(s);
    setSecretDeletionModalVisible(true);
  };

  const closeDeleteModal = () => {
    setSecretDeletionModalVisible(false);
  };

  const openSecretDetailsModal = (s) => {
      setSelectedSecret(s);
      setSecretDetailsModalVisible(true);
  }

  const closeSecretDetailsModal = () => {
      setSecretDetailsModalVisible(false);
  }

  const handleNewSecretSubmission = (evt) => {
    evt.preventDefault();
    let secret = {
        "name": newSecretName,
        "date": new Date().toJSON(),
        "text": newSecretText,
        "files": newSecretFileFormData
    }
    createSecret(secret).then((res) => {
        console.log("Response:", res);
    })
    closeSecretCreationModal();
  }

  const handleCancelSecretCreation = (evt) => {
    evt.preventDefault();
    closeSecretCreationModal();
  }

  const handleSecretEditSubmission = (evt) => {
    evt.preventDefault();
    let secret = {
        "name": editSecretName,
        "date": new Date().toJSON(),
        "text": editSecretText,
        "files": editSecretFileFormData
    }
    updateSecret(secret).then((res) => {
        console.log("Response:", res);
    })
    closeEditModal();
  }

  const handleCancelSecretEdit = (evt) => {
    evt.preventDefault();
    closeEditModal();
  }

  const handleSecretDeletion = (evt) => {
    evt.preventDefault();
    let secret = {
      "id": selectedSecret.id
    };
    deleteSecret(secret).then(res => {console.log("Response:", res);});
    closeDeleteModal();
  }

  const handleCancelSecretDeletion = (evt) => {
      evt.preventDefault();
      closeDeleteModal();
  }

  const handleCloseSecretDetails = (evt) => {
      evt.preventDefault();
      closeSecretDetailsModal();
  }

  const rows = secrets.map(
      (secret) => (
          <SecretTableRow
              secret={secret}
              handleShow={openSecretDetailsModal}
              handleEdit={openEditModal}
              handleDelete={openDeleteModal}
          />
      )
  );

  return (
    <>
      <SimplePageLayout>
        <h1>Secrets</h1>
        <div className={"d-flex justify-content-between"}>
          <button onClick={openSecretCreationModal}>Add Secret</button>
          <DateTimeRangePicker
            start={startDate}
            setStart={setStartDate}
            end={endDate}
            setEnd={setEndDate}
            max={currDate}
          />
        </div>
        
        <Modal isVisible={isSecretCreationModalVisible}>
            <SecretCreationForm
                setName={setNewSecretName}
                setText={setNewSecretText}
                setFiles={setNewSecretFiles}
                handleSubmit={handleNewSecretSubmission}
                handleCancel={handleCancelSecretCreation}
            />
        </Modal>
        <Modal isVisible={isSecretEditModalVisible}>
            <SecretEditForm
                setName={setEditSecretName}
                setText={setEditSecretText}
                setFiles={setEditSecretFiles}
                handleSubmit={handleSecretEditSubmission}
                handleCancel={handleCancelSecretEdit}
            />
        </Modal>
        <Modal isVisible={isSecretDeletionModalVisible}>
          <SecretDeletionForm
              secret={selectedSecret}
              handleSubmit={handleSecretDeletion}
              handleCancel={handleCancelSecretDeletion}
          />
        </Modal>
        <Modal isVisible={isSecretDetailsModalVisible}>
            <SecretDetailsForm
                secret={selectedSecret}
                handleClose={handleCloseSecretDetails}
            />
        </Modal>
        <SecretTable
          page_size={SECRET_TABLE_PAGE_SIZE}
          numPages={numPages}
          maxNavButtons={SECRET_TABLE_MAX_NAV_BUTTONS}
          rows={rows}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </SimplePageLayout>
    </>
  );
};

export default SecretManager;