import React from "react";

// based on: https://www.w3schools.com/howto/howto_css_modals.asp
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