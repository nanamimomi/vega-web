import React from "react";

const MIN_PAGES = 1;

const TableNavButtons = ({currPage, setCurrPage, numPages, maxNavButtons}) => {

    const navButtonsForCurrentPage = () => {
        const rangeSize = Math.min(numPages, maxNavButtons);
        let start = Math.max(currPage - Math.ceil((rangeSize - 1) / 2), MIN_PAGES);
        const range = Array(rangeSize).fill(start).map((value, index) => value + index);
        return range.map((n) => <button onClick={() => tryChangingCurrentPageTo(n)} disabled={n === currPage}>{n}</button>);
    }

    const tryChangingCurrentPageTo = (page) => {
        if(MIN_PAGES <= page && page <= numPages && page !== currPage) {
            setCurrPage(page);
        }
    }

    return (
        <div className={"table-nav"} style={{float: "right"}}>
            <button onClick={() => tryChangingCurrentPageTo(currPage - 1)}>Prev</button>
            {navButtonsForCurrentPage()}
            <button onClick={() => tryChangingCurrentPageTo(currPage + 1)}>Next</button>
        </div>
    );
}

export {MIN_PAGES};
export default TableNavButtons;