import React from "react"
import {Link} from "react-router-dom";
import {Link as scrollLink ,animateScroll as scroll} from "react-scroll";

export const Header = () => {


    return (
        <>
            <div className={"nav__section row"}>
                <div className={"col-6 login__image"}>

                </div>
                <div className={"col-6"}>
                    <div className={"login__container"}>
                        <Link to={'/logowanie'} className="login__container-login" href="#">Zaloguj</Link>
                        <Link to={'/rejestracja'} className="login__container-register" href="#">Załóż konto</Link>
                    </div>
                    <div className={"main__nav"}>
                        <ul className={"main__nav-list"}>
                            <li className={"main__nav-item"}>Start</li>
                            <li className={"main__nav-item"}>O co chodzi?</li>
                            <li className={"main__nav-item"}>O nas</li>
                            <li className={"main__nav-item"}>Fundacja i Organizacje</li>
                            <li className={"main__nav-item"}>Kontakt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}