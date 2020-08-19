import React, {useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {auth} from "../Firebase/firebase";
import {Burger} from "./Burger";

export const Navigation = () =>{
    const[user] = useState(auth.currentUser);
    return(
    <div className="row">
        <div className={"burger__test"}>
            <Burger/>
        </div>
        <div className="col-6"></div>
        <div className={"col-6"}>
            <div className={"login__container"}>
                {user &&(
                        <p className={"login__container-login"} >{auth.currentUser.email}</p>)
                }
                <Link to={'/logowanie'} className={"login__container-login"} href="#">Zaloguj</Link>
                <Link to={'/rejestracja'} className={"login__container-register"} href="#">Załóż konto</Link>
            </div>
            <div className={"main__nav"}>
                <div className={"main__nav-list"}>
                    <HashLink className={"main__nav-item"} smooth={true} duration={1000} to={"/#header"}>Start</HashLink>
                    <HashLink className={"main__nav-item"} smooth={true} duration={1200} to={"/#steps"}>O co chodzi?</HashLink>
                    <HashLink className={"main__nav-item"} smooth={true} duration={1400} to={"/#about"}>O nas</HashLink>
                    <HashLink className={"main__nav-item"} smooth={true} duration={1600} to={"/#help"}>Fundacja i Organizacje</HashLink>
                    <HashLink className={"main__nav-item"} smooth={true} duration={1800} to={"/#contact"}>Kontakt</HashLink>
                </div>
            </div>
        </div>
    </div>
    )
}