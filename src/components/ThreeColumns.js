import React from "react"

export const ThreeColumns = () => {
    return (
        <>
            <div className={"row"} id="threecolumns">
                <div className={"col-12 cards__wrapper"}>
                    <div className={"card__container col-3"}>
                        <h2 className={"card__container-header"}>10</h2>
                        <h4 className={"card__container-title"}>Oddanych workow</h4>
                        <p className={"card__container-text"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                            vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className={"card__container col-3"}>
                        <h2 className={"card__container-header"}>5</h2>
                        <h4 className={"card__container-title"}>WSPARTYCH ORGANIZACJI</h4>
                        <p className={"card__container-text"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                            vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className={"card__container col-3"}>
                        <h2 className={"card__container-header"}>7</h2>
                        <h4 className={"card__container-title"}>ZORGANIZOWANY ZBIÓREK</h4>
                        <p className={"card__container-text"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                            vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}