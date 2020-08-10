import React from "react";

export const YellowLabel = ({text}) => {
    return(
        <div id={"yellow"} className={"row yellow__box"}>
            <div className={"col-7 yellow__box-wrapper"}>
                <h2 className={"yellow__box-header"}>Ważne!</h2>
                <p className={"yellow__box-text"}>{text}</p>
            </div>
        </div>
    )

}