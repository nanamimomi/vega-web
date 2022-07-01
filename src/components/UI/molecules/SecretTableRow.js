import React from "react";
import {toHumanReadable} from "../../../utils/Dates";

const SecretTableRow = ({name, date}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{toHumanReadable(date)}</td>
        </tr>
    );
}

export default SecretTableRow;