import React  from "react";
import { useNode } from "@craftjs/core";

export const Column = ({children}) => {
    return (
        <div className="column">
            { children }
        </div>
    );
};

export const ColumnDraggable = ({key, background}) => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <div className="column column-draggable" ref={ref => connect(drag(ref))} style={{background}}>
            <p>Column Drag 1</p>
        </div>
    );
};

export const ColumnDraggable2 = ({key, background}) => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <div key={key} className="column column-draggable" ref={ref => connect(drag(ref))} style={{background}}>
            <p>Column Drag 2</p>
        </div>
    );
};