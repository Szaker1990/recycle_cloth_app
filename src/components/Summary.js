import React from "react";
import {Contact} from "./Contact";
import Icon from "../assets/shirt.png";
import refresh from "../assets/refresh.png";
import {YellowLabel} from "./YellowLabel";
import {Buttons} from "./Buttons";

export const Summary = ({currentStep,nextStep,prevStep,items,who,street,city,date,time,notice ,postCode,phone,from,howMuch}) => {
    if (currentStep !== 5) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Uwaga! sprawdź czy dane sie zgadzają!"}/>
            <div className={"row bear__container"}>
                <div className="col-6 summary">
                    <div className={"summary__container-header"}>
                        <h2 className={"summary__header"}>Podsumowanie Twojej darowizny</h2>
                        <h4 className={"summary__counter"}>Oddajesz: {who}</h4>
                        <div className={"summary__wrapper"}>
                            <img alt={"refresh"} className={"summary__img"} src={Icon}/>
                            <p className={"summary__description"}>{howMuch} {items}</p>
                        </div>
                        <div className={"summary__wrapper"}>
                            <img alt={"tshirt"} className={"summary__img"} src={refresh}/>
                            <p className={"summary__description"}>dla lokalizacji:{from}</p>
                        </div>
                    </div>
                    <div className={"summary__container-data"}>
                        <div className={"summary__data-handler"}>
                            <h4 className={"data__handler-header"}>Adres odbioru:</h4>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Ulica</p>
                                <p className={"summary__data-text"}>{street}</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Miasto</p>
                                <p className={"summary__data-text"}>{city}</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Kod <br/> Pocztowy</p>
                                <p className={"summary__data-text"}>{postCode}</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Numer <br/> Telefonu</p>
                                <p className={"summary__data-text"}>{phone}</p>
                            </div>
                        </div>
                        <div className={"summary__data-handler"}>
                            <h4 className={"data__handler-header"}>Termin odbioru:</h4>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Data</p>
                                <p className={"summary__data-text"}>{date}</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Godzina</p>
                                <p className={"summary__data-text"}>{time}</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Uwagi<br/> dla Kuriera</p>
                                <p className={"textarea__box"}>{notice}</p>
                            </div>
                        </div>
                    </div>
                    <Buttons prevStep={prevStep} nextStep={nextStep}/>
                </div>
            </div>
            <Contact/>
        </>
    )
}