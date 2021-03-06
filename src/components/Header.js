import React, { useState} from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import decoration from "../assets/shirt.svg";
import {auth} from "../Firebase/firebase";
import {logOutFire} from "../Firebase/authorization";
import {Burger} from "./Burger";

export const Header = () => {
    const[user] = useState(auth.currentUser)
    return (
        <>
            <div id="header" className={"nav__section row"}>
                <div className={"col-6 login__image"}></div>
                <div id={"body__container"} className={"col-6"}>
                    <div className={"burger__container"}>
                        <Burger/>
                    </div>
                    <div className={"login__container "}>
                        {
                            user &&(
                                <>
                                <p className={"login__container-register"}>{auth.currentUser.email}</p>
                                    <Link to={'/rejestracja'} className="login__container-register" href="#">Załóż konto</Link>
                                    <Link to={'/wylogowanie'} onClick={logOutFire} className="login__container-register" href="#">Wyloguj</Link>
                               </>
                            )}
                        {!user &&(
                                        <>
                                            <Link to={'/logowanie'} className="login__container-login" href="#">Zaloguj</Link>
                                            <Link to={'/rejestracja'} className="login__container-register" href="#">Załóż konto</Link>
                                        </>
                                        )}

                    </div>
                    <div className={"main__nav"}>
                        <div className={"main__nav-list"}>
                            <ScrollLink className={"main__nav-item"} to={"header"} smooth={true} duration={1000}>Start</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"steps"} smooth={true} duration={1200}>O co chodzi?</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"about"} smooth={true} duration={1400}>O nas</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"help"} smooth={true} duration={1600}>Fundacja i Organizacje</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"contact"} smooth={true} duration={1800}>Kontakt</ScrollLink>
                        </div>
                    </div>
                    <div className={"content__box"}>
                        <h2 className={"content__box-header"}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img className={"content__box-img"} src={decoration} alt={"decoration"}/>
                        <div className={"content__box-buttons"}>
                            <Link to={'/formularz'} className="content__box-link" href="#"> Oddaj <br/>rzeczy</Link>
                            <Link to={'/rejestracja'} className="content__box-link" href="#">zorganizuj<br/> zbiórke</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}