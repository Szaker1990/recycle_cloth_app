import React, {useState} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import decoration from "../assets/shirt.svg";
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Step4} from "./Step4";
import {Summary} from "./Summary";
import {Greetings} from "./Greetings";

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [giveAway, setGiveaway] = useState({
        collection: "",
        bags: "",
        cityTo: "",
        recipients: {
            kids: false,
            singleMother: false,
            homeless: false,
            disabled: false,
            elder: false
        },
        organization: "",
        street: "",
        city: "",
        postCode: "",
        phoneNumber: 0,
        date: "",
        time: "",
        notice: ""
    })
    const handleChangeGiveAwayData = e => {
        const {name,value} = e.target;
        setGiveaway(prev => ({
                ...prev,
                [name]: value
            })
        );
    }
    const handleChangeGiveAwayDataById = e => {
        const {id} = e.target;
        setGiveaway(prev => ({
                ...prev,
                [id]: e.target.innerText
            })
        );
    }
    const nextStep = (e) => {
        e.preventDefault()
        setCurrentStep(prev => prev + 1);
    }
    const prevStep = (e) => {
        e.preventDefault()
        setCurrentStep(prev => prev - 1);
    }
    return (
        <>
            <div className="row collect">
                <div className="col-6 sweat__img"></div>
                <div className={"col-6"}>
                    <div className={"login__container"}>
                        <h3 className={"user__name"}>Witaj ŁukaszTo@gmail.com</h3>
                        <Link to={'/logowanie'} className="login__container-login" href="#">Zaloguj</Link>
                        <Link to={'/rejestracja'} className="login__container-register" href="#">Załóż konto</Link>
                    </div>
                    <div className={"main__nav"}>
                        <div className={"main__nav-list"}>
                            <HashLink className={"main__nav-item"} to={"/#header"}>Start</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#steps"}>O co chodzi?</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#about"}>O nas</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#help"}>Fundacja i Organizacje</HashLink>
                            <HashLink className={"main__nav-item"} to={"/#contact"}>Kontakt</HashLink>
                        </div>
                    </div>
                    <div className={"collect__step-box"}>
                        <h2 className={"step__box-header"}>Oddaj rzeczy, których juz nie chcesz <br/> POTRZEBUJĄCYM</h2>
                        <img className={"content__box-img"} src={decoration} alt={"decoration"}/>
                        <h3 className={"step__box-text"}>Wystarcza 4 proste kroki:</h3>
                        <div className={"steps__container"}>
                            <div className={"steps__container-box"}>
                                <div className={"steps__container-wrapper"}>
                                    <h3 className={"steps__container-header"}>1</h3>
                                    <p className={"steps__container-text"}>Wybierz rzeczy</p>
                                </div>
                            </div>
                            <div className={"steps__container-box"}>
                                <div className={"steps__container-wrapper"}>
                                    <h3 className={"steps__container-header"}>2</h3>
                                    <p className={"steps__container-text"}>Spakuj je w worki</p>
                                </div>
                            </div>
                            <div className={"steps__container-box"}>
                                <div className={"steps__container-wrapper"}>
                                    <h3 className={"steps__container-header"}>3</h3>
                                    <p className={"steps__container-text"}>Wybierz fundacje</p>
                                </div>
                            </div>
                            <div className={"steps__container-box"}>
                                <div className={"steps__container-wrapper"}>
                                    <h3 className={"steps__container-header"}>4</h3>
                                    <p className={"steps__container-text"}>Zamów Kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Step1 currentStep={currentStep}
                   nextStep={nextStep}
                   dataChange={handleChangeGiveAwayData}
                   data={giveAway.collection}/>
            <Step2 currentStep={currentStep}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   dataChange={handleChangeGiveAwayDataById}
                   head={giveAway.bags}/>
            <Step3 dataChange={handleChangeGiveAwayDataById}
                   currentStep={currentStep}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   orgChange={handleChangeGiveAwayData}
                   cityTo={giveAway.cityTo}/>
            <Step4 currentStep={currentStep}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   dataChange={handleChangeGiveAwayData}
                   street={giveAway.street}/>
            <Summary street={giveAway.street}
                     items={giveAway.collection}
                     currentStep={currentStep}
                     nextStep={nextStep}
                     prevStep={prevStep}
                     city={giveAway.city}
                     who={giveAway.organization}
                     phone={giveAway.phoneNumber}
                     postCode={giveAway.postCode}
                     date={giveAway.date}
                     time={giveAway.time}
                     notice={giveAway.notice}
                     howMuch={giveAway.bags}
                     from={giveAway.cityTo}/>
            <Greetings currentStep={currentStep}/>
        </>
    )
}