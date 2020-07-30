import React from "react"
import {Contact} from "./Contact";
import {YellowLabel} from "./YellowLabel";

export const Step1 = ({currentStep,nextStep}) => {
    if (currentStep !== 1) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy\n" +
            "wiedzieć komu najlepiej je przekazać."}/>
            <div className={"row bear__container"}>
                <div className={"col-4 bear__box"}>
                    <h3 className={"bear__box-step"}>Krok 1/4</h3>
                    <h2 className={"bear__box-header"}>Zaznacz co chcesz oddać:</h2>
                    <form className={"bear__box-form"}>
                        <div className={"bear__box-wrapper"}>
                            <input className={"radio__input"} type={"radio"} value={"ubrania, które nadaja sie do ponownego użycia"} name={"giveaway"} />
                            <label className={"radio__label"}>ubrania, które nadaja sie do ponownego użycia</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input className={"radio__input"} type={"radio"} value={"ubrania, do wyrzucenia"} name={"giveaway"} />
                            <label className={"radio__label"}>ubrania, do wyrzucenia</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input className={"radio__input"} type={"radio"} value={"zabawki"} name={"giveaway"} />
                            <label className={"radio__label"}>zabawki</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input className={"radio__input"} type={"radio"} value={"książki"} name={"giveaway"} />
                            <label className={"radio__label"}>książki</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input className={"radio__input"} type={"radio"} value={"inne"} name={"giveaway"} />
                            <label className={"radio__label"}>inne</label>
                        </div>
                        <div className={"bear__box-buttons"}>
                            <button onClick={nextStep} className={"bear__box-btn"}>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
            <Contact/>
        </>
    )
}