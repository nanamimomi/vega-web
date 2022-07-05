import React from "react";
import DatePicker from "react-datepicker";

const DateTimeRangePicker = ({start, setStart, end, setEnd, min, max}) => {
    return (
        <div className={"aligned-block"}>
            <p style={{marginRight: "10px"}}>Dates:</p>
            <div style={{marginRight: "10px"}}>
                <DatePicker
                    selected={start}
                    onChange={setStart}
                    selectsStart
                    showTimeSelect
                    startDate={start}
                    endDate={end}
                    minDate={min}
                    maxDate={end}
                />
            </div>
            <p style={{marginRight: "10px"}}>to</p>
            <div>
                <DatePicker
                    selected={end}
                    onChange={setEnd}
                    selectsEnd
                    showTimeSelect
                    startDate={start}
                    endDate={end}
                    minDate={start}
                    maxDate={max}
                />
            </div>
        </div>
    );
}

export default DateTimeRangePicker;
