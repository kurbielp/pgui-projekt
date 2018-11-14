import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  constructor() {
    super();
  }

  render() {
    const Modal = ({ handleClose, show, children }) => {
      const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";
    };
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  }
}
