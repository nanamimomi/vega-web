import React from "react";
import { Table } from "react-bootstrap";
import TableNavButtons from "../molecules/TableNavButtons";

const SecretTable = (props) => {
  const rowRangeForCurrentPage = () => {
    const start = (props.currPage - 1) * props.page_size;
    const stop = start + Math.min(props.rows.length - start, props.page_size);
    return [start, stop];
  };

  return (
    <div>
      <Table
        className={"fixed"}
        style={{ marginTop: "10px", marginBottom: "0px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Date created</th>
            <th style={{ width: "400px" }}>Secret</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{props.rows.slice(...rowRangeForCurrentPage())}</tbody>
      </Table>
      <TableNavButtons
        currPage={props.currPage}
        setCurrPage={props.setCurrPage}
        numPages={props.numPages}
        maxNavButtons={props.maxNavButtons}
      />
    </div>
  );
};

export default SecretTable;
