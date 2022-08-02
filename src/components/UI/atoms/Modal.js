import React from "react";

const Modal = ({isVisible, children}) => {
    return (
        isVisible
            ? (
                <div className={"modal"}>
                    <div className={"modal-content"}>
                        {children}
                    </div>
                </div>
            )
            : null
    );
}

export default Modal;