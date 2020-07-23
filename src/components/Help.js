import React from "react";
import decoration from "../assets/decoration.svg";

export const Help = () => {

    return (
        <>
            <div id="help" className="row">
                <div className="col-12 help__container">
                    <h2 className="help__container-header">Komu pomagamy?</h2>
                    <img className={"help__container-img"} src={decoration} alt={"decoration"}/>
                    <div className="help__container-buttons">
                        <button className="help__button">Fundacjom</button>
                        <button className="help__button">Organizacjom pozarządowym</button>
                        <button className="help__button">Lokalny zbiórkom</button>
                    </div>
                    <p className="help__container-text">W naszej bazie znajdziesz listę
                        zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
                        zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </div>
            <div className="row help__setup">
                <div className="col-10">
                    <div className="help__box">
                        <div className={"help__wrapper"}>
                            <h2 className={"help__wrapper-name"}>Fundacja “Dbam o Zdrowie”</h2>
                            <p className={"help__wrapper-goal"}>Cel i misja: Pomoc osobom znajdującym się w
                                trudnej sytuacji życiowej.
                            </p>
                        </div>
                        <div>
                            <p className={"help__wrapper-items"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="help__box">
                        <div className={"help__wrapper"}>
                            <h2 className={"help__wrapper-name"}>Fundacja “Dbam o Zdrowie”</h2>
                            <p className={"help__wrapper-goal"}>Cel i misja: Pomoc osobom znajdującym się w
                                trudnej sytuacji życiowej.
                            </p>
                        </div>
                        <div>
                            <p className={"help__wrapper-items"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="help__box">
                        <div className={"help__wrapper"}>
                            <h2 className={"help__wrapper-name"}>Fundacja “Dbam o Zdrowie”</h2>
                            <p className={"help__wrapper-goal"}>Cel i misja: Pomoc osobom znajdującym się w
                                trudnej sytuacji życiowej.
                            </p>
                        </div>
                        <div>
                            <p className={"help__wrapper-items"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}