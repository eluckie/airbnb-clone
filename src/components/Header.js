import React from "react";
import ReservationBar from "./ReservationBar";
import Profile from "./Profile";
import logo from "./../img/airbnb-logo.png"

function Header() {
  return (
    <React.Fragment>
      <div id="header-logo">
        <img src={logo} alt="AirBNB logo" id="logo"/>
        <div id="header-res">
          <ReservationBar/>
        </div>
        <div id="profile-btns">
          <Profile/>
        </div>
      </div>
      <br/><br/>
    </React.Fragment>
  );
}

export default Header;