import React from "react";

export const Paginate = ({items}) => {

    return (
        <>
            <div className="col-10">
                {items.map((item,index) =>(
                    <div key={index} className="help__box">
                        <div className={"help__wrapper"}>
                            <h2 className={"help__wrapper-name"}>{item.name}</h2>
                            <p className={"help__wrapper-goal"}>{item.goal}</p>
                        </div>
                        <div>
                            <p className={"help__wrapper-items"}>{item.items}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )


}