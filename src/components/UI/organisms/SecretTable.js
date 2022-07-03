import React from "react";
import {Table} from 'react-bootstrap'
import TableNavButtons from "../molecules/TableNavButtons";

const SecretTable = (props) => {

    const rowRangeForCurrentPage = () => {
        const start = (props.currPage - 1) * props.page_size;
        const stop = start + Math.min(props.rows.length - start, props.page_size);
        return [start, stop];
    }

    console.log("AAAAAAA")
    console.log(props.rows.slice(...rowRangeForCurrentPage()))

    const TableData = props.rows.slice(...rowRangeForCurrentPage()).map((row) => (
        <tr>
            <td>{row.props.name}</td>
            <td>{row.props.date}</td>
        </tr>
    ))

    return (
        <div>
            <Table className={"fixed"} style={{marginTop: "10px", marginBottom: "0px"}}>
                <thead>
                    <tr>
                        <th style={{width: "400px"}}>Name</th>
                        <th>Date created</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData}
                </tbody>
            </Table>
            <TableNavButtons
                currPage={props.currPage}
                setCurrPage={props.setCurrPage}
                numPages={props.numPages}
                maxNavButtons={props.maxNavButtons}
            />
        </div>
    );
}

export default SecretTable