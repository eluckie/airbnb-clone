import React from "react";
import ReservationBar from "./ReservationBar";
import Profile from "./Profile";
import logo from "./../img/airbnb-logo.png"

function Header() {
  return (
    <React.Fragment>
      <img src={logo} alt="AirBNB logo" id="logo"/>
      <ReservationBar/>
      <Profile/>
    </React.Fragment>
  );
}

export default Header;