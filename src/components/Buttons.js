import React from "react";

export const Buttons = ({prevStep,nextStep,disabled}) => {
    return(
        <div className={"btn__container"}>
            <button onClick={prevStep} className={"btn"}>Wstecz</button>
            <button onClick={nextStep} disabled={disabled} className={"btn"}>Dalej</button>
        </div>
    )
}