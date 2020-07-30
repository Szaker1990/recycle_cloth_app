import React from "react";
import face from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";

export const Footer = () => {
    return(
        <div className={"row footer"}>
            <div className={"col-4"}></div>
            <div className={"col-4 footer__header"}>
                <h3>Copyright by Łukasz</h3>
            </div>
            <div className={"col-4 footer__logos"}>
                <img className={"footer__img-face"} src={face} alt={"facebook"}/>
                <img className={"footer__img-insta"} src={insta} alt={"insta"}/>
            </div>
        </div>
    )
}