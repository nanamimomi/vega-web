import React, {useState} from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";
import SecretTable from "../UI/organisms/SecretTable";
import SecretTableRow from "../UI/molecules/SecretTableRow";
import {getAllSecrets} from "../../service/SecretManager/SecretManager";

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
    }

    const secrets = getDisplayedSecrets(startDate, endDate);
    const rows = secrets.map((secret) => <SecretTableRow {...secret}/>);
    const numPages = Math.max(1, Math.ceil(secrets.length / SECRET_TABLE_PAGE_SIZE));
    const [currPage, setCurrPage] = useState(1);
    if(currPage > numPages) {
        setCurrPage(numPages);
    }

    const addSecret = () => {
        console.log("Add Secret Requested");
    }

    return (
        <SimplePageLayout>
            <h1>Secrets</h1>
            <div className={"d-flex justify-content-between"}>
                <button onClick={addSecret}>Add Secret</button>
                <DateTimeRangePicker
                    start={startDate}
                    setStart={setStartDate}
                    end={endDate}
                    setEnd={setEndDate}
                    max={currDate}
                />
            </div>
            <SecretTable
                page_size={SECRET_TABLE_PAGE_SIZE}
                numPages={numPages}
                maxNavButtons={SECRET_TABLE_MAX_NAV_BUTTONS}
                rows={rows}
                currPage={currPage}
                setCurrPage={setCurrPage}
            />
        </SimplePageLayout>
    );
}

export default SecretManager;