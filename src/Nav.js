import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
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
    <div className={`Nav ${show && "nav_black"}`}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNk4qehCE8TFWGo-DGqYowvPNmX_BBBbsRA&usqp=CAU"
        alt="nav_logo"
        className="netflix_logo"
      />
      <h2>Iamnk</h2>
    </div>
  );
}

export default Nav;
