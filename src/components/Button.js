import React  from "react";
import { useNode } from "@craftjs/core";

export const Button = ({size, variant, primary, children}) => {
    const { connectors: {connect, drag} } = useNode();
    return (
        <a size={size} variant={variant} color={primary} ref={ref => connect(drag(ref))}>
            {children}
        </a>
    )
}

export default Button;