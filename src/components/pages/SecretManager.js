import React from "react";
import SimplePageLayout from "../templates/SimplePageLayout";
import DateTimeRangePicker from "../UI/molecules/DateTimeRangePicker";

const SecretManager = () => {

    const addSecret = () => {
        console.log("Add Secret Requested");
    }

    const dateTimeFilterChange = (start, end) => {
        console.log("Date Time Filter Changed: start = " + start + ", end = " + end);
    }

    const defaultEndOfDateTimeFilter = new Date();
    const defaultStartOfDateTimeFilter = new Date();
    defaultStartOfDateTimeFilter.setMonth(defaultEndOfDateTimeFilter.getMonth() - 1);
    const maxOfDateTimeFilter = new Date();

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
        </SimplePageLayout>
    );
}

export default SecretManager;