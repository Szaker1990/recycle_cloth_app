import React, {useEffect, useState} from "react"
import {Contact} from "./Contact";
import {YellowLabel} from "./YellowLabel";

export const Step1 = ( props ) => {
    const{currentStep, nextStep, dataChange, data } = props
    const[disabled,setDisabled] = useState(true)
    const enableButton = () => {
        data.length >0 ? setDisabled(false) : setDisabled(true)
    }
    useEffect(() => {
        enableButton()
    })
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
                    <form id={"bear__form"} className={"bear__box-form"}>
                        <div className={"bear__box-wrapper"}>
                            <input onClick={dataChange}  className={"radio__input"} type={"radio"} value={"ubrania, które nadaja sie do ponownego użycia"} name={"collection"}/>
                            <label className={"radio__label"}>ubrania, które nadaja sie do ponownego użycia</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input onClick={dataChange} className={"radio__input"} type={"radio"} value={"ubrania, do wyrzucenia"} name={"collection"} />
                            <label className={"radio__label"}>ubrania, do wyrzucenia</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input onClick={dataChange}  className={"radio__input"} type={"radio"} value={"zabawki"} name={"collection"}  />
                            <label className={"radio__label"}>zabawki</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input onClick={dataChange}  className={"radio__input"} type={"radio"} value={"książki"} name={"collection"}  />
                            <label onClick={dataChange}  className={"radio__label"}>książki</label>
                        </div>
                        <div className={"bear__box-wrapper"}>
                            <input onClick={dataChange}  className={"radio__input"} type={"radio"} value={"inne"} name={"collection"}  />
                            <label className={"radio__label"}>inne</label>
                        </div>
                        <div className={"bear__box-buttons"}>
                            <button onClick={nextStep} disabled={disabled} className={"bear__box-btn"}>Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
            <Contact/>
        </>
    )
}