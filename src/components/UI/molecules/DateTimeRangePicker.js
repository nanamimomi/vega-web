import React from "react";
import DatePicker from "react-datepicker";

class DateTimeRangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: props.start,
            end: props.end,
        };
        this.max = props.max ? props.max : new Date();
        this.min = props.min;
        this.subscriber = props.onChange;
    }

    notifySubscriber = () => this.subscriber(this.state.start, this.state.end);
    setStart = (date) => this.setState({start: date}, this.notifySubscriber);
    setEnd = (date) => this.setState({end: date}, this.notifySubscriber);

    render() {
        return (
            <div className={"aligned-block"}>
                <p style={{marginRight: "10px"}}>Dates:</p>
                <div style={{marginRight: "10px"}}>
                    <DatePicker
                        selected={this.state.start}
                        onChange={this.setStart}
                        selectsStart
                        showTimeSelect
                        startDate={this.state.start}
                        endDate={this.state.end}
                        minDate={this.min}
                        maxDate={this.state.end}
                    />
                </div>
                <p style={{marginRight: "10px"}}>to</p>
                <div>
                    <DatePicker
                        selected={this.state.end}
                        onChange={this.setEnd}
                        selectsEnd
                        showTimeSelect
                        startDate={this.state.start}
                        endDate={this.state.end}
                        minDate={this.state.start}
                        maxDate={this.max}
                    />
                </div>
            </div>
        );
    }
}

export default DateTimeRangePicker;
