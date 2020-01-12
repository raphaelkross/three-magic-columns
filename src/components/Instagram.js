import React  from "react";
import { useNode } from "@craftjs/core";
import InstagramEmbed from 'react-instagram-embed';

export const Instagram = ({ url }) => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <div className="column column-draggable instagram" ref={ref => connect(drag(ref))}>
           <InstagramEmbed
                url={url}
                maxWidth={320}
                hideCaption={true}
            />
        </div>
    );
};
