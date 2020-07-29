import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import decoration from "../assets/decoration.svg";

export const Logout = () => {
    return (
        <>
            <div className="row">
                <div className="col-6"></div>
                <div className={"col-6"}>
                    <div className={"login__container"}>
                        <Link to={'/logowanie'} className="login__container-login" href="#">Zaloguj</Link>
                        <Link to={'/rejestracja'} className="login__container-register" href="#">Załóż konto</Link>
                    </div>
                    <div className={"main__nav"}>
                        <div className={"main__nav-list"}>
                            <HashLink className={"main__nav-item"} to={"/#threecolumns"}>Start</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#steps"}>O co chodzi?</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#about"}>O nas</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#help"}>Fundacja i Organizacje</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#contact"}>Kontakt</HashLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12 logout__container"}>
                    <div className={"logout"}>
                        <h2 className={"logout__header"}>Wylogowanie nastąpiło pomyślnie!</h2>
                        <img className={"form__img"} src={decoration} alt={"decoration"}/>
                        <Link to={'/'} className={"logout__button"} href="#">Strona główna</Link>
                    </div>
                </div>
            </div>
        </>
    )
}