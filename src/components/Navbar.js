import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
        alt="Netflix Logo"
      />
      <img
        className="navAvatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Navbar;
