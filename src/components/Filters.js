import React from "react";
import PropTypes from "prop-types";

function Filters(props) {
  return (
    <React.Fragment>
      <div id="inline-list">
        <h3>{props.category}</h3>
      </div>
    </React.Fragment>
  );
}

Filters.propTypes = {
  category: PropTypes.string.isRequired
};

export default Filters;