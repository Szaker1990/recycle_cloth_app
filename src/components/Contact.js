import React from "react";
import decoration from "../assets/decoration.svg";

export const Contact = () => {

    return (
        <>
            <div className="row contact__container">
                <div className="col-7"></div>
                <div className="col-5 contact__container-form">
                    <h2 className="form__header">Skontaktuj sie z nami</h2>
                    <img className={"form__img"} src={decoration} alt={"decoration"}/>
                    <form>
                        <div className="form__wrapper">
                            <div className={"form__wrapper-box"}>
                                <label className="form__wrapper-label">Wpisz swoje imię</label>
                                <input className="form__wrapper-input" placeholder={"Grzesiek"} type="text"/>
                            </div>
                            <div className={"form__wrapper-box"}>
                                <label className="form__wrapper-label">Wpisz swój email</label>
                                <input className="form__wrapper-input" placeholder={"abc@xyz.pl"} type="email"/>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}