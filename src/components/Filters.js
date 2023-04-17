import React from "react";
import PropTypes from "prop-types";

function Filters(props) {
  return (
    <React.Fragment>
      <h3>{props.category}</h3>
    </React.Fragment>
  );
}

Filters.propTypes = {
  category: PropTypes.string.isRequired
};

export default Filters;