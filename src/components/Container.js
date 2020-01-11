import React  from "react";
import { useNode } from "@craftjs/core";

export const Container = ({background, padding = 0, children}) => {
    const { connectors: {connect, drag} } = useNode();
    return (
      <div className="container" ref={ref => connect(drag(ref))} style={{background}}>
        {children}
      </div>
    )
}

export default Container;