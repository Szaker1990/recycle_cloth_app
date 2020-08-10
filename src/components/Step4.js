import React from "react";
import {YellowLabel} from "./YellowLabel";
import {Contact} from "./Contact";
import {Buttons} from "./Buttons";

export const Step4 = ({currentStep, nextStep, prevStep,dataChange,street,city,phone,postCode,date,time,notice}) => {

    const handleForm = () => {
        if(street.length < 2){
            return false
        }
    }
    if (currentStep !== 4) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Podaj adres oraz termin odbioru rzeczy."}/>
            <div className="row bear__container">
                <div className={"step4__container"}>
                    <h4 className={"step4__counter"}>Krok 4/4</h4>
                    <h2 className={"step4__header"}>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                    <form onSubmit={handleForm} className={"step4__form"}>
                        <div className={"step4__form-wrapper"}>
                            <h2 className={"step4__box__header"}>Adres odbioru</h2>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Ulica</label>
                                <input onChange={dataChange} value={street} name={"street"} className={"step4__form-input"}/>
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Miasto</label>
                                <input onChange={dataChange} value={city} name={"city"} className={"step4__form-input"}/>
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Kod<br/>pocztowy</label>
                                <input onChange={dataChange} value={postCode} name={"postCode"} className={"step4__form-input"}/>
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Numer<br/>telefonu</label>
                                <input onChange={dataChange} value={phone} name={"phoneNumber"} className={"step4__form-input"}/>
                            </div>
                        </div>
                        <div className={"step4__form-wrapper"}>
                            <h2 className={"step4__box__header"}>Termin odbioru </h2>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Data</label>
                                <input type={"date"} onChange={dataChange} value={date} name={"date"} className={"step4__form-input"} />
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Godzina</label>
                                <input type={"time"} onChange={dataChange} value={time} name={"time"} className={"step4__form-input"} />
                            </div>
                            <div className={"step4__form-box"}>
                                <label className={"step4__form-label"}>Uwagi <br/> dla Kuriera</label>
                                <textarea className={"step4__form-area"} onChange={dataChange} cols={4}
                                      value={notice} name={"notice"} rows={4}>
                                </textarea>
                            </div>
                        </div>
                    </form>
                    <Buttons prevStep={prevStep} nextStep={nextStep}/>
                </div>
            </div>
            <Contact/>
        </>
    )
}