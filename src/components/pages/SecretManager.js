import React from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";
import SecretTable from "../UI/organisms/SecretTable";
import {allSecrets} from "../../service/SecretManager/SecretManager";

const SECRET_TABLE_PAGE_SIZE = 10;
const SECRET_TABLE_MAX_NAV_BUTTONS = 5;

const SecretManager = () => {
    const secrets = allSecrets();

    const defaultEndOfDateTimeFilter = new Date();
    const defaultStartOfDateTimeFilter = new Date();
    defaultStartOfDateTimeFilter.setMonth(defaultEndOfDateTimeFilter.getMonth() - 1);
    const maxOfDateTimeFilter = new Date();

    const addSecret = () => {
        console.log("Add Secret Requested");
    }

    const dateTimeFilterChange = (start, end) => {
        console.log("Date Time Filter Changed: start = " + start + ", end = " + end);
    }

    return (
        <SimplePageLayout>
            <h1>Secrets</h1>
            <div className={"d-flex justify-content-between"}>
                <button onClick={addSecret}>Add Secret</button>
                <DateTimeRangePicker
                    start={defaultStartOfDateTimeFilter}
                    end={defaultEndOfDateTimeFilter}
                    max={maxOfDateTimeFilter}
                    onChange={dateTimeFilterChange}
                />
            </div>
            <SecretTable
                page_size={SECRET_TABLE_PAGE_SIZE}
                maxNavButtons={SECRET_TABLE_MAX_NAV_BUTTONS}
                secrets={secrets}
            />
        </SimplePageLayout>
    );
}

export default SecretManager;