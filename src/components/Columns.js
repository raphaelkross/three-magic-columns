import React  from "react";
import { useNode } from "@craftjs/core";

export const Column = ({children}) => {
    return (
        <div className="column">
            { children }
        </div>
    );
};

export const ColumnDraggable = ({background, children}) => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <div className="column column-draggable" ref={ref => connect(drag(ref))} style={{background}}>
            { children }
        </div>
    );
};