import React from "react";
import {YellowLabel} from "./YellowLabel";
import {Contact} from "./Contact";
import {Select} from "./Select";

export const Step2 = ({currentStep, nextStep, prevStep,data,dataChange}) => {
    if (currentStep !== 2) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Wszystkie rzeczy do oddania zapakuj w 60l worki" +
            ". Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}/>
            <div className={"row bear__container"}>
                <div className={"step2__container col-7"}>
                    <h4 className={"step2__container-counter"}>Krok 2/4</h4>
                    <h2 className={"step2__container-header"}>Podaj liczbę 60l worków, w które spakowałeś/aś
                        rzeczy:</h2>
                    <form className={"step2__container-form"}>
                        <div className={"step2__form-wrapper"}>
                            <h4 className={"step2__form-header"}>Liczba 60l worków</h4>
                            <Select  title={"— wybierz —"} items={[1,2,3,4,5]}/>
                        </div>
                        <div className={"step2__buttons-container"}>
                            <button onClick={prevStep} className={"step2__btn"}>Wstecz</button>
                            <button onClick={nextStep} className={"step2__btn"}>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
            <Contact/>
        </>
    )

}