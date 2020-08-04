import React from "react";
import {Contact} from "./Contact";
import Icon from "../assets/shirt.png";
import refresh from "../assets/refresh.png";
import {YellowLabel} from "./YellowLabel";

export const Summary = ({currentStep,nextStep,prevStep}) => {
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
                        <h4 className={"summary__counter"}>Oddajesz:</h4>
                        <div className={"summary__wrapper"}>
                            <img className={"summary__img"} src={Icon}/>
                            <p className={"summary__description"}>4 worki, ubrania w dobrym stanie, dzieciom</p>
                        </div>
                        <div className={"summary__wrapper"}>
                            <img className={"summary__img"} src={refresh}/>
                            <p className={"summary__description"}>dla lokalizacji: Warszawa</p>
                        </div>
                    </div>
                    <div className={"summary__container-data"}>
                        <div className={"summary__data-handler"}>
                            <h4 className={"data__handler-header"}>Adres odbioru:</h4>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Ulica</p>
                                <p className={"summary__data-text"}>Prosta 51</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Miasto</p>
                                <p className={"summary__data-text"}>Warszawa</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Kod <br/> Pocztowy</p>
                                <p className={"summary__data-text"}>90-290</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Numer <br/> Telefonu</p>
                                <p className={"summary__data-text"}>478 489 490</p>
                            </div>
                        </div>
                        <div className={"summary__data-handler"}>
                            <h4 className={"data__handler-header"}>Termin odbioru:</h4>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Data</p>
                                <p className={"summary__data-text"}>17.10.2020</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Godzina</p>
                                <p className={"summary__data-text"}>17:30</p>
                            </div>
                            <div className={"summary__data-wrapper"}>
                                <p className={"summary__data-text"}>Uwagi<br/> dla Kuriera</p>
                                <p className={"summary__data-text"}></p>
                            </div>
                        </div>
                    </div>
                    <div className={"summary__data-buttons"}>
                        <button onClick={prevStep} className={"summary__data-btn"}>Wstecz</button>
                        <button onClick={nextStep} className={"summary__data-btn"}>Dalej</button>
                    </div>
                </div>
            </div>
            <Contact/>
        </>
    )
}