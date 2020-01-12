import React from "react";
import { useNode } from "@craftjs/core";
import InstagramEmbed from "react-instagram-embed";
import PropTypes from "prop-types";

const Instagram = ({ url }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div className="column column-draggable instagram" ref={(ref) => connect(drag(ref))}>
      <InstagramEmbed
        url={url}
        maxWidth={320}
        hideCaption
      />
    </div>
  );
};

Instagram.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Instagram;
