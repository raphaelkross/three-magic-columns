import React from "react";
import PropTypes from "prop-types";

const Column = ({ children }) => (
  <div className="column column-simple">
    { children }
  </div>
);

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Column.defaultProps = {
  children: [],
};

export default Column;
