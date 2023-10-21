import React from "react";
import "../styles/Container.css";
function Container(props) {
    /*
    Props:
    titleContent: string
    bodyContent: string
    containerStyle: object
    bodyStyle: object
    extraComponents: array

    */
    return (
        <div className='default-container' style={props.containerStyle}>
            <h1 className={props.titleContent ? "container-title" : "container-none"} style={props.titleStyle}>{props.titleContent}</h1>
            <p className={props.bodyContent ? "container-body" : "container-none"} style={props.bodyStyle}>{props.bodyContent}</p>
            {props.extraComponents}
        </div>
    )
}

export default Container;