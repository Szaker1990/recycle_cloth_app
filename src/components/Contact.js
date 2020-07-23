import React from "react";
import decoration from "../assets/decoration.svg";
import insta from "../assets/Instagram.png";
import face from "../assets/Facebook.png";

export const Contact = () => {

    return (
        <>
            <div className={"contact__container"}>
            <div className="row">
                <div className="col-7"></div>
                <div className="col-5 contact__container-form">
                    <h2 className="form__header">Skontaktuj sie z nami</h2>
                    <img className={"form__img"} src={decoration} alt={"decoration"}/>
                    <p></p>
                    <form>
                        <div className="form__wrapper">
                            <div className={"form__wrapper-box kick"}>
                                <label className="form__wrapper-label">Wpisz swoje imię</label>
                                <input className="form__wrapper-input" placeholder={"Grzesiek"} type="text"/>
                                <p></p>
                            </div>
                            <div className={"form__wrapper-box"}>
                                <label className="form__wrapper-label">Wpisz swój email</label>
                                <input className="form__wrapper-input" placeholder={"abc@xyz.pl"} type="email"/>
                                <p></p>
                            </div>
                        </div>
                        <div className={"form__wrapper-area"}>
                            <label className={"area__label"}>Wpisz swoja wiadomość</label>
                            <textarea className={"area__input"} rows={4} cols={4} placeholder={"Lorem ipsum dolor sit amet," +
                            " consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" +
                            ". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                            "consequat."}>

                            </textarea>
                        </div>
                        <div className={"form__button-wrapper"}>
                            <button className={"button__submit"}>Wyślij</button>
                        </div>

                    </form>

                </div>
            </div>
                <div className="row">
                        <div className={"col-4"}></div>
                        <div className="col-8 footer">
                            <h4 className={"footer__header"}>Copyright by CodersLab</h4>
                            <div className={"footer__logos"}>
                            <img src={insta} alt="instagram"/>
                            <img src={face} alt="facebook"/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}