import React, { useState } from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";
import SecretTable from "../UI/organisms/SecretTable";
import SecretTableRow from "../UI/molecules/SecretTableRow";
import { getAllSecrets } from "../../service/SecretManager/SecretManager";
import Modal from "../UI/atoms/Modal";
import SecretCreationForm from "../UI/organisms/SecretCreationForm";
import DeleteSecretModal from "../UI/organisms/DeleteSecretModal";
import { createSecret } from "../../service/SecretManager/SecretManager";

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

  const [isSecretCreationModalVisible, setSecretCreationModalVisible] =
    useState(false);

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const [clickedSecret, setClickedSecret] = useState(null);

  const openSecretCreationModal = () => {
    setSecretCreationModalVisible(true);
  };

  const closeSecretCreationModal = () => {
    setSecretCreationModalVisible(false);
  };

  const openDeleteModal = (s) => {
    setClickedSecret(s);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const rows = secrets.map((secret) => (
    <SecretTableRow
      name={secret.name}
      id={secret.id}
      date={secret.date}
      secret={secret.secret}
      openDeleteModal={openDeleteModal}
    />
  ));

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
        {isSecretCreationModalVisible ? (
          <Modal
            close={closeSecretCreationModal}
            children={<SecretCreationForm />}
          />
        ) : null}
        <SecretTable
          page_size={SECRET_TABLE_PAGE_SIZE}
          numPages={numPages}
          maxNavButtons={SECRET_TABLE_MAX_NAV_BUTTONS}
          rows={rows}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </SimplePageLayout>
      <DeleteSecretModal
        secret={clickedSecret}
        close={closeDeleteModal}
        show={isDeleteModalVisible}
      />
    </>
  );
};

export default SecretManager;
