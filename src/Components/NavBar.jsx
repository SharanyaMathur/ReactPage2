import React from 'react';
import "./navbar.css";
import { Person } from "@material-ui/icons";

export default function NavBar() {
  return (
    <div class="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img class="logo" src="https://www.optum.com/content/dam/optum3/events/skins/logos/optum_2x.png" alt="Optum"/>
        </div>
        <div className="topRight">
          <div className="topbarLink">
            <a href="#">FAQs</a>
          </div>
          <div className="topbarLink">
            <a href="#">About Us</a>
          </div>
          <div className="topbarLink">
            <a href="#">Contact Us</a>
          </div>
          <div className="topbarLink">
            <Person />
          </div>
        </div>
      </div>
      <div class="header__border"></div>
    </div>
  );
}