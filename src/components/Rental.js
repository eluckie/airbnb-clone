import React from "react";
import PropTypes from "prop-types";

function Rental(props) {
  return (
    <React.Fragment>
      {props.image}
      <h4>{props.location} - ⭐️ {props.rating}</h4>
      <p><em>{props.distance} miles away</em></p>
      <p><strong>${props.price}</strong> night</p>
    </React.Fragment>
  );
}

Rental.propTypes = {
  image: PropTypes.object,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Rental;