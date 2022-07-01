import React, {useState} from "react";
import {Table} from 'react-bootstrap'
import TableNavButtons from "../molecules/TableNavButtons";
import SecretTableRow from "../molecules/SecretTableRow";

const SecretTable = ({page_size, maxNavButtons, secrets}) => {
    const rows = secrets.map((secret) => <SecretTableRow {...secret}/>);
    const numPages = Math.ceil(secrets.length / page_size);
    const [currPage, setCurrPage] = useState(1);

    const rowRangeForCurrentPage = () => {
        const start = (currPage - 1) * page_size;
        const stop = start + Math.min(secrets.length - start, page_size);
        return [start, stop];
    }

    return (
        <div>
            <Table className={"fixed"} style={{marginTop: "10px", marginBottom: "0px"}}>
                <thead>
                    <tr>
                        <td style={{width: "400px"}}>Name</td>
                        <td>Date created</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.slice(...rowRangeForCurrentPage())}
                </tbody>
            </Table>
            <TableNavButtons
                currPage={currPage}
                setCurrPage={setCurrPage}
                numPages={numPages}
                maxNavButtons={maxNavButtons}
            />
        </div>
    );
}

export default SecretTable