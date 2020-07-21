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
                        <button className="help__button">Fundacją</button>
                        <button className="help__button">Organizacją pozarządowym</button>
                        <button className="help__button">Lokalny zbiórką</button>
                    </div>
                    <p className="help__container-text">W naszej bazie znajdziesz listę
                        zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
                        zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </div>
        </>
    )
}