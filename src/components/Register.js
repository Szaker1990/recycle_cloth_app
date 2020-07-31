import React, {useState} from "react";
import decoration from "../assets/decoration.svg";
import {Navigation} from "./Navigation";

export const Register = () =>{
    const [user,setUser] = useState({
        email: "",
        password: "",
        password2: ""
    });
    const[emailError,setEmailError] = useState("");;
    const[passwordError,setPasswordError] = useState("");
    const[password2Error,setPassword2Error] = useState("");
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
        if (user.email.length < 5 || !user.email.includes("@") || !user.email.includes(".")) {
            setEmailError("Podany email jest nieprawidłowy!");
        }
        else {
            setEmailError("");
        }
        if (user.password.length < 6) {
            setPasswordError("Podane hasło jest za krótkie!");
        }
        else {
            setPasswordError("");

        }
        if(user.password !== user.password2) {
            setPassword2Error("Podane hasło jest rózne od pierwszego");
        }
        else {
            setPassword2Error("");
        }
    }
    return(
        <>
           <Navigation/>
            <div className={"row"}>
                <div className={"col-12 login"}>
                    <h2 className={"login__header"}>Zaloguj się</h2>
                    <img className={"form__img"} src={decoration} alt={"decoration"}/>
                    <form onSubmit={handleLogin} className={"login__form"}>
                        <div className={"login__input-wrapper"}>
                            <div className={"wrapper__handler"}>
                                <label className={"login__form-label"}>Email</label>
                                <input type={"text"} name={"email"} onChange={handleChangeUserData}
                                       value={user.email} className={"login__form-email"}/>
                                <p className={"error__message"}>{emailError}</p>
                                <label className={"login__form-label"}>Hasło</label>
                                <input  type={"password"} name={"password"}  onChange={handleChangeUserData}
                                        value={user.password} className={"login__form-password"}/>
                                <p className={"error__message"}>{passwordError}</p>
                                <label className={"login__form-label"}>Powtórz Hasło</label>
                                <input  type={"password"} name={"password2"}  onChange={handleChangeUserData}
                                        value={user.password2} className={"login__form-password"}/>
                                <p className={"error__message"}>{password2Error}</p>
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