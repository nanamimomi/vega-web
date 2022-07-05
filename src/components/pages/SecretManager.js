import React, { useState } from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";
import SecretTable from "../UI/organisms/SecretTable";
import SecretTableRow from "../UI/molecules/SecretTableRow";
import { getAllSecrets } from "../../service/SecretManager/SecretManager";
import Modal from "../UI/atoms/Modal";
import SecretCreationForm from "../UI/organisms/SecretCreationForm";
import SecretEditForm from "../UI/organisms/SecretEditForm";
import DeleteSecretModal from "../UI/organisms/DeleteSecretModal";
import { createSecret, updateSecret } from "../../service/SecretManager/SecretManager";

const SECRET_TABLE_PAGE_SIZE = 10;
const SECRET_TABLE_MAX_NAV_BUTTONS = 5;

const SecretManager = ({all_secrets = null, now_date = new Date(), then_date = new Date()}) => {
  const currDate = now_date; //new Date();
  const oneMonthAgo = then_date; //new Date();
  oneMonthAgo.setMonth(currDate.getMonth() - 1);
  const [endDate, setEndDate] = useState(currDate);
  const [startDate, setStartDate] = useState(oneMonthAgo);

  const getDisplayedSecrets = (start, end) => {
    if (all_secrets == null) {
      return getAllSecrets()
          .filter((s) => start <= s.date && s.date <= end)
          .sort((a, b) => b.date - a.date);
    }
    else {
      return all_secrets
          .filter((s) => start <= s.date && s.date <= end)
          .sort((a, b) => b.date - a.date);
    }
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

  const [isSecretCreationModalVisible, setSecretCreationModalVisible] =
    useState(false);

    const [editSecretName, setEditSecretName] = useState(null);
    const [editSecretText, setEditSecretText] = useState(null);
    const [editSecretFiles, setEditSecretFiles] = useState([]);
    const editSecretFileFormData = new FormData();
    for(let i = 0; i < editSecretFiles.length; i++) {
        editSecretFileFormData.append("file", editSecretFiles[i]);
    }
  
    const [isSecretEditModalVisible, setSecretEditModalVisible] =
      useState(false);

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const [clickedSecret, setClickedSecret] = useState(null);

  const openSecretCreationModal = () => {
    setSecretCreationModalVisible(true);
  };

  const closeSecretCreationModal = () => {
    setSecretCreationModalVisible(false);
  };

  const openEditModal = (s) => {
    setClickedSecret(s);
    setSecretEditModalVisible(true);
  };

  const closeEditModal = () => {
    setSecretEditModalVisible(false);
  };

  const openDeleteModal = (s) => {
    setClickedSecret(s);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

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

  const handleEditSecretSubmission = (evt) => {
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

  const rows = secrets.map((secret) => <SecretTableRow {...secret} openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>);

  const handleCancelSecretCreation = (evt) => {
      evt.preventDefault();
      closeSecretCreationModal();
  }

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
                handleSubmit={handleEditSecretSubmission}
                handleCancel={closeDeleteModal}
            />
        </Modal>
        <DeleteSecretModal
          secret={clickedSecret}
          close={closeDeleteModal}
          show={isDeleteModalVisible}
        />
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