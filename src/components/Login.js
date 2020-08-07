import React, {useState} from "react";
import decoration from "../assets/shirt.svg";
import {Navigation} from "./Navigation";
import {loginFire} from "../Firebase/authorization";
import {useHistory} from "react-router-dom";

export const Login = () => {
    const [user,setUser] = useState({
        email: "",
        password: "",
    });
    const[emailError,setEmailError] = useState("");
    const[passwordError,setPasswordError] = useState("");
    const history = useHistory();
    const handleChangeUserData = e => {
        const {name, value} = e.target;
        setUser(prev => ({
                ...prev,
                [name]: value
            })
        );
    }
    async function handleLogin (e){
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
        try {
            await loginFire(user.email, user.password);
            history.push("/");
        } catch (err) {
            setEmailError(err.message);
        }
    }
    return (
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
                            </div>
                        </div>
                        <div className={"login__button-wrapper"}>
                            <button className={"btn__register"}>Załóż konto</button>
                            <input onClick={handleLogin} className={"active"} type={"submit"} value={"Zaloguj sie"}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}