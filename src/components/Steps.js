import React from "react"
import decoration from "../assets/decoration.svg";
import bag from "../assets/bag.png";
import refresh from "../assets/refresh.png";
import scale from "../assets/scale.png";
import shirt from "../assets/shirt.png"
import {Link} from "react-router-dom";

export const Steps = () => {

    return (
        <>
            <div className={"row"} id="steps">
                <div className="col-12 header__box">
                    <h2 className="header__box-head">Wystarczą 4 proste kroki</h2>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-12 img__box">
                    <img className={"img__box-deco"} src={decoration} alt={"decoration"}/>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-12 steps__box">
                    <div className="col-8 steps__box">
                        <div className="steps__box-card">
                            <img className={"box__card-img"} src={shirt} alt={"shirt"}/>
                            <h3 className="box__card-header">Wybierz rzeczy</h3>
                            <p className="box__card-text">ubrania, zabawki,<br/> sprzęt i inne</p>
                        </div>
                        <div className="steps__box-card">
                            <img className={"box__card-img"} src={bag} alt={"bag"}/>
                            <h3 className="box__card-header">Spakuj je</h3>
                            <p className="box__card-text">skorzystaj z <br/> worków na śmieci</p>
                        </div>
                        <div className="steps__box-card">
                            <img className={"box__card-img"} src={scale} alt={"scake"}/>
                            <h3 className="box__card-header">Zdecyduj komu chcesz pomóc</h3>
                            <p className="box__card-text">wybierz zaufane <br/> miejsce</p>
                        </div>
                        <div className="steps__box-card">
                            <img className={"box__card-img"} src={refresh} alt={"refresh"}/>
                            <h3 className="box__card-header">Zamów kuriera</h3>
                            <p className="box__card-text">kurier przyjedzie <br/> w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-12">
                    <div className={"button__wrapper"}>
                        <Link to={'/formularz'} className="button__wrapper-but" href="#"> Oddaj <br/>rzeczy</Link>
                    </div>
                </div>
            </div>
        </>
    )
}