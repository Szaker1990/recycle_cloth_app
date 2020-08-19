import React from "react";
import {HashLink} from "react-router-hash-link";

export const BurgerLinks = () => {
    return (
        <div className={"burger__wrapper"}>
            <div className={"burger__list"}>
                <HashLink className={"burger__item"} smooth={true} duration={1000} to={"/#header"}>Start</HashLink>
                <HashLink className={"burger__item"} smooth={true} duration={1200} to={"/#steps"}>O co chodzi?</HashLink>
                <HashLink className={"burger__item"} smooth={true} duration={1400} to={"/#about"}>O nas</HashLink>
                <HashLink className={"burger__item"} smooth={true} duration={1600} to={"/#help"}>Fundacja i Organizacje</HashLink>
                <HashLink className={"burger__item"} smooth={true} duration={1800} to={"/#contact"}>Kontakt</HashLink>
            </div>
        </div>
    )
}