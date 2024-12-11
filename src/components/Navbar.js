import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-success shadow">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <i className="bi bi-whatsapp"></i> QuickChat
        </span>
        <span>
          <a
            className="btn btn-outline-light"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cipher-sphere/QuickChat"
          >
            Code
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
