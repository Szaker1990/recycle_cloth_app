import React, {useEffect, useState} from "react";
import decoration from "../assets/decoration.svg";
import insta from "../assets/Instagram.png";
import face from "../assets/Facebook.png";
export const Contact = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("")
    const [responseMessage,SetResponseMessage] = useState("")
    const [user, setUser] = useState({
        name: userName,
        email: userEmail,
        message: userMessage
    })
    const ApiAdress = 'https://fer-api.coderslab.pl/v1/portfolio/contact'
    const addNewUser = () =>{
        let newUser = {
            name: userName.trim(),
            email: userEmail,
            message: userMessage
        }
        setUser(newUser);
    }
    useEffect(() =>{
        addNewUser()
    },[userName,userEmail,userMessage])
    const handleSubmitData = () => {
        if(userName.length<3 ){
            setNameError("Podane imię jest nieprawidłowe!");
        }else{
            setNameError("");
        }
        if(userEmail<5 && !user.email.includes("@")){
            setEmailError("Podany email jest nieprawidłowy!");
        }else{
            setEmailError("");
        }
        if(userMessage.length< 12){
            setMessageError("Wiadomość musi mieć 120 znaków!");
        }else{
            setMessageError("");
        }
    }
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleUserEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const handleUserMessage = (e) => {
        setUserMessage(e.target.value)
    }
    const sendForm = (e) => {
        e.preventDefault()
        handleSubmitData()
        console.log(userMessage.length);
        if(userEmail.length > 1 && userName.length >1 && userMessage.length > 120){
            fetch(ApiAdress,{
                method: "POST",
                body: JSON.stringify(user),
                headers:{
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    if(response.status === 200){
                        console.log("SUCCESSS")
                        SetResponseMessage("Wiadomośc została wysłana! Wkrótce sie z Toba skontaktujemy")
                    }else if(response.status === 400){
                        console.log("SOMETHING WENT WRONG")
                    }
                })
                .then( data => console.log(data))
                .catch( err => console.log(err));
        }else{
            return false
            }
            reset()
        }

        const reset = () =>{
            setUserName("");
            setUserEmail("");
            setUserMessage("");
        }
    return (
        <>
            <div id="contact" className={"contact__container"}>
                <div className={"row"}>
                    <div className="col-7"></div>
                    <div className={"col-5 contact__container-form"}>
                        <h2 className={"form__header"}>Skontaktuj sie z nami</h2>
                        <img className={"form__img"} src={decoration} alt={"decoration"}/>
                        <p className={"succes__message"}>{responseMessage}</p>
                        <form onSubmit={sendForm}>
                            <div className={"form__wrapper"}>
                                <div className={"form__wrapper-box kick"}>
                                    <label className={"form__wrapper-label"}>Wpisz swoje imię</label>
                                    <input value={userName} className={(nameError === "" ? "form__wrapper-input" : "form__wrapper-active")} onChange={handleUserName}
                                           placeholder={"Grzesiek"} type="text"/>
                                    <p className={"error__message"}>{nameError}</p>
                                </div>
                                <div className={"form__wrapper-box"}>
                                    <label className={"form__wrapper-label"}>Wpisz swój email</label>
                                    <input value={userEmail} className={(emailError === "" ? "form__wrapper-input" : "form__wrapper-active")} onChange={handleUserEmail}
                                           placeholder={"abc@xyz.pl"} type="email"/>
                                    <p className={"error__message"}>{emailError}</p>
                                </div>
                            </div>
                            <div className={"form__wrapper-area"}>
                                <label  className={"area__label"}>Wpisz swoja wiadomość</label>
                                <textarea value={userMessage} className={(messageError === "" ? "area__input" : "area__input-active")} onChange={handleUserMessage} rows={4} cols={4}
                                          placeholder={"Lorem ipsum dolor sit amet," +
                                          " consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" +
                                          ". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                                          "consequat."}>
                                </textarea>
                                <p className={"error__message"}>{messageError}</p>
                            </div>
                            <div className={"form__button-wrapper"}>
                                <input type="submit"  value={"Wyslij"} className={"button__submit"}/>
                            </div>
                        </form>
                    </div>
                </div>
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
            </div>
        </>
    )
}