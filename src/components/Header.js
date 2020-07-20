import React from "react"
import {Link} from "react-router-dom";
import {Link as scrollLink ,animateScroll as scroll} from "react-scroll";

export const Header = () => {


    return (
        <>
            <div className={"container row"}>
                <div className={"col-6"}>

                </div>
                <div className={"col-6 login__container"}>
                    <Link to={'/logowanie'} className="login__container-login" href="#">Zaloguj</Link>
                    <Link to={'/rejestracja'} className="login__container-register" href="#">Załóż konto</Link>
                </div>
            </div>
        </>
    )
}