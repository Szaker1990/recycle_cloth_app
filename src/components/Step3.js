import React, {useEffect, useState} from "react";
import {YellowLabel} from "./YellowLabel";
import {Contact} from "./Contact";
import {Select} from "./Select";
import {Buttons} from "./Buttons";

export const Step3 = ({currentStep, nextStep, prevStep,orgChange,dataChange,cityTo}) => {
    const[disabled,setDisabled] = useState(true);
    const enableButton = () => {
        cityTo.length > 0 ? setDisabled(false) : setDisabled(true)
    }
    useEffect(() => {
        enableButton()
    })

    const setBg = (e) => {
        if (e.target.className === "step3__recipient-item") {
            e.target.className = "step3__recipient-itemYellow"
        } else
             {
            e.target.className = "step3__recipient-item"
        }
    }
    if (currentStep !== 3) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. " +
            "Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}/>
            <div className={"row bear__container"}>
                <div className={"step3__container"}>
                    <h4 className={"step3__container-counter"}>Krok 3/4</h4>
                    <form className={"step3__form"}>
                        <div className={"step3__select-container"}>
                            <h3 className={"step3__select-header"}>Lokalizacja:</h3>
                            <div className={"select__wrapper"}>
                            <Select dataChange={dataChange} ident={"cityTo"}  title={"— wybierz —"} items={["Warszawa","Poznań","Sosnowiec","Szczecin","Serock"]}/>
                            </div>
                        </div>
                        <div className={"step3__recipient"}>
                            <h3 className={"step3__recipient-header"}>Komu chcesz pomóc?</h3>
                            <ul className={"step3__recipient-list"}>
                                <li className={"step3__recipient-item"} onClick={setBg} >dzieciom</li>
                                <li className={"step3__recipient-item"} onClick={setBg}>matka</li>
                                <li className={"step3__recipient-item"} onClick={setBg}>bezdomnym</li>
                                <li className={"step3__recipient-item"} onClick={setBg}>niepełnosprawnym</li>
                                <li className={"step3__recipient-item"} onClick={setBg}>osobom starszym</li>
                            </ul>
                        </div>
                        <div className={"step3__input-container"}>
                            <label className={"step3__input-label"}>
                                Wpisz nazwe konkretnej organizacji (opcjonalne)
                            </label>
                            <input onChange={orgChange} className={"step3__input-area"} type={"text"} name={"organization"}/>
                        </div>
                        <Buttons prevStep={prevStep} nextStep={nextStep} disabled={disabled}/>
                    </form>
                </div>
            </div>
            <Contact/>
        </>
    )
}