import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import decoration from "../assets/decoration.svg";

export const Login = () => {
    const [user,setUser] = useState({
        email: "",
        password: "",
    });
    const[emailError,setEmailError] = useState("");
    const[passwordError,setPasswordError] = useState("")

    const handleChangeUserData = e => {
        const {name, value} = e.target;
        setUser(prev => ({
                ...prev,
                [name]: value
            })
        );
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if (user.email < 5 && !user.email.includes("@")) {
            setEmailError("Podany email jest nieprawidłowy!");
        } else {
            setEmailError("");
        }
        if (user.password < 6) {
            setPasswordError("Podane hasło jest za krótkie!");
        } else {
            setPasswordError("");

        }
    }
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
                            <ScrollLink className={"main__nav-item"} to={"/#threecolumns"} smooth={true} duration={1000}>Start</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"/#steps"} smooth={true} duration={1000}>O co chodzi?</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"about"} smooth={true} duration={1000}>O nas</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"help"} smooth={true} duration={1000}>Fundacja i Organizacje</ScrollLink>
                            <ScrollLink className={"main__nav-item"} to={"contact"} smooth={true} duration={1000}>Kontakt</ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12 login"}>
                    <h2 className={"login__header"}>Zaloguj się</h2>
                    <img className={"form__img"} src={decoration} alt={"decoration"}/>
                    <form onSubmit={handleLogin} className={"login__form"}>
                        <div className={"login__input-wrapper"}>
                            <div className={"wrapper__handler"}>
                                <label className={"login__form-label"}>Email</label>
                                <input type={"text"} name={"email"} onChange={handleChangeUserData} value={user.email} className={"login__form-email"}/>
                                <p className={"error__message"}>{emailError}</p>
                                <label className={"login__form-label"}>Hasło</label>
                                <input  type={"text"} name={"password"}  onChange={handleChangeUserData} value={user.password} className={"login__form-password"}/>
                                <p className={"error__message"}>{passwordError}</p>
                            </div>
                        </div>
                        <div className={"login__button-wrapper"}>
                            <button className={"btn__register"}>Załóż konto</button>
                            <input className={"active"} type={"submit"} value={"Zaloguj sie"}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}