import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export const Navigation = () =>{
    return(
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
    )
}