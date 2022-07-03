import React from "react";

// based on: https://www.w3schools.com/howto/howto_css_modals.asp
const Modal = ({close, isVisible, children}) => {
    return (
        isVisible
            ? (
                <div className={"modal"}>
                    <div className={"modal-content"}>
                        {children}
                        <button onClick={close}>Cancel</button>
                    </div>
                </div>
            )
            : null
    );
}

export default Modal;