import React from "react"

export const Step1 = () => {

    const checkboxes = [
        {
            name: 'Ubrania, które nadają sie do ponownego użycia',
            key: '1',
            label: 'Ubrania, które nadają sie do ponownego użycia',
        },
        {
            name: 'ubrania, do wyrzucenia',
            key: '2',
            label: 'ubrania, do wyrzucenia',
        },
        {
            name: 'zabawki',
            key: '3',
            label: 'zabawki',
        },
        {
            name: 'książki',
            key: '4',
            label: 'książki',
        },
        {
            name: 'inne',
            key: '5',
            label: 'Inne',
        },
    ];

    return (
        <>
            <div className={"row yellow__box"}>
                <div className={"col-7 yellow__box-wrapper"}>
                    <h2 className={"yellow__box-header"}>Ważne!</h2>
                    <p className={"yellow__box-text"}>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                        wiedzieć komu najlepiej je przekazać.
                    </p>
                </div>
            </div>
            <div className={"row bear__container"}>
                <div className={"col-4 bear__box"}>
                    <h3 className={"bear__box-step"}>Krok 1/4</h3>
                    <h2 className={"bear__box-header"}>Zaznacz co chcesz oddać:</h2>
                    <form className={"bear__box-form"}>
                        {
                            checkboxes.map(box => (
                                <>
                                    <div className={"checkbox__wrapper"}>
                                        <input className={"checkbox__input"} type={"checkbox"} value={box.name}/>
                                        <label className={"checkbox__label"} key={box.key}> {box.name}</label>
                                    </div>
                                </>
                            ))
                        }
                    </form>
                </div>
            </div>
        </>
    )

}