import React, {useContext, useState, useEffect} from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";
import SecretTable from "../UI/organisms/SecretTable";
import SecretTableRow from "../UI/molecules/SecretTableRow";
import { getAllSecrets, createSecret, updateSecret, deleteSecret } from "../../service/SecretManager/SecretManager";
import Modal from "../UI/atoms/Modal";
import SecretCreationForm from "../UI/organisms/SecretCreationForm";
import SecretEditForm from "../UI/organisms/SecretEditForm";
import SecretDeletionForm from "../UI/organisms/SecretDeletionForm";
import SecretDetailsForm from "../UI/organisms/SecretDetailsForm";
import {UserContext} from "../../auth/UserProvider";

const SECRET_TABLE_PAGE_SIZE = 10;
const SECRET_TABLE_MAX_NAV_BUTTONS = 5;

const SecretManager = () => {
    const currDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currDate.getMonth() - 1);
    const [endDate, setEndDate] = useState(currDate);
    const [startDate, setStartDate] = useState(oneMonthAgo);

    const {user} = useContext(UserContext)

    const [secrets, setSecrets] = useState([]);
    useEffect(() => {
      console.log("A JCNEAUF");
      const owner = {
          "owner": user.username,
      }
        getAllSecrets(owner, user.jwt).then(setSecrets).catch(e => {});
    }, [user]);
    const displayedSecrets = secrets
        .filter((s) => startDate <= s.dateCreated && s.dateCreated <= endDate)
        .sort((a, b) => b.dateCreated - a.dateCreated)
    const numPages = Math.max(1, Math.ceil(displayedSecrets.length / SECRET_TABLE_PAGE_SIZE));
    const [currPage, setCurrPage] = useState(1);
    if(currPage > numPages) {
        setCurrPage(numPages);
    }

  const [newSecretName, setNewSecretName] = useState(null);
  const [newSecretText, setNewSecretText] = useState(null);
  const [newSecretFile, setNewSecretFile] = useState(null);
  const newSecretFileFormData = new FormData();
  if(newSecretFile) {
      newSecretFileFormData.append("file", newSecretFile[0]);
  }

  const [isSecretCreationModalVisible, setSecretCreationModalVisible] = useState(false);
  const [editSecretName, setEditSecretName] = useState(null);
  const [editSecretText, setEditSecretText] = useState(null);
  const [editSecretFile, setEditSecretFile] = useState(null);
  const editSecretFileFormData = new FormData();
  if(editSecretFile) {
      editSecretFileFormData.append("file", editSecretFile[0]);
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
    setEditSecretName(s.secretName);
    setEditSecretText(s.content);
    setEditSecretFile(s.file)
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
    const secret = {
        "name": newSecretName,
        "text": newSecretText,
        "owner": user.username,
    }
    const owner = {
      "owner": user.username,
    }
    createSecret(secret, user.jwt)
        .then((res) => {console.log("Response:", res);})
        .then(() => getAllSecrets(owner, user.jwt))
        .then(setSecrets)
        .catch(e => {});
    closeSecretCreationModal();
  }

  const handleCancelSecretCreation = (evt) => {
    evt.preventDefault();
    closeSecretCreationModal();
  }

  const handleSecretEditSubmission = (evt) => {
    evt.preventDefault();
    const secret = {
        "name": editSecretName,
        "text": editSecretText,
        "uuid": selectedSecret.secretID
    }
    const owner = {
      "owner": user.username,
  }
    updateSecret(secret, user.jwt)
        .then((res) => console.log("Response:", res))
        .then(() => getAllSecrets(owner, user.jwt))
        .then(setSecrets)
        .catch(() => {});
    closeEditModal();
  }

  const handleCancelSecretEdit = (evt) => {
    evt.preventDefault();
    closeEditModal();
  }

  const handleSecretDeletion = (evt) => {
    evt.preventDefault();
      const owner = {
        "owner": user.username,
    }
    deleteSecret(user.username, selectedSecret.secretID, user.jwt)
        .then((res) => {console.log("Response:", res);})
        .then(() => getAllSecrets(owner, user.jwt))
        .then(setSecrets)
        .catch(e => {});
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

  const rows = displayedSecrets.map(
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
                setFile={setNewSecretFile}
                handleSubmit={handleNewSecretSubmission}
                handleCancel={handleCancelSecretCreation}
            />
        </Modal>
        <Modal isVisible={isSecretEditModalVisible}>
            <SecretEditForm
                name={editSecretName}
                text={editSecretText}
                file={editSecretFile}
                setName={setEditSecretName}
                setText={setEditSecretText}
                setFile={setEditSecretFile}
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