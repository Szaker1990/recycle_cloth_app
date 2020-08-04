import React from "react";
import {Contact} from "./Contact";
import Icon from "../assets/shirt.png";
import refresh from "../assets/refresh.png";

export const Summary = () => {

    return (
        <>
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
                </div>
            </div>
            <Contact/>
        </>
    )
}