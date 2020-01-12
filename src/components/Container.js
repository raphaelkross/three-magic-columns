import React from "react";
import { useNode } from "@craftjs/core";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div className="container" ref={(ref) => connect(drag(ref))}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.defaultProps = {
  children: [],
};

export default Container;
