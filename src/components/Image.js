import React  from "react";
import { useNode } from "@craftjs/core";
import image from "../assets/image.png";

export const Image = () => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <div className="column column-draggable image" ref={ref => connect(drag(ref))}>
            <img src={image} />
        </div>
    );
};
