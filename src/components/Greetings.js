import React from "react";
import decoration from "../assets/shirt.svg";
import {Contact} from "./Contact";

export const Greetings = ({currentStep}) => {
    if (currentStep !== 6) {
        return null
    }
    return (
        <>
            <div className={"row bear__container"}>
                <div className={"col-6 greeting__wrapper"} id={"greeting"}>
                    <h2 className={"greeting__header"}>Dziękujemy za przesłanie formularza <br/>Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                    <img alt={"deco"} src={decoration}/>
                </div>
            </div>
            <Contact/>
        </>
    )
}