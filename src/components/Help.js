import React, {useState} from "react";
import decoration from "../assets/decoration.svg";
import foundations from "../data/foundations";
import organization from "../data/organization";
import local from "../data/local";
import {Paginate} from "./Paginate";
import {PaginationButtons} from "./PaginationButtons";

export const Help = () => {
    const[helper,setHelper] = useState(foundations);
    const[iter,setIter] = useState(0);
    const [currPage,setCurrPage] = useState(1);
    const [helpersPerPage,setHelpersPerPage] = useState(3);

    const handleToFoundation = () =>{
        setHelper(foundations);
    }

    const handleToOrganizations = () =>{
        setHelper(organization);
    }

    const handleToLocals = () =>{
        setHelper(local);
    }
    const indexOfLastHelper = currPage * helpersPerPage;
    const indexOfFirstHelper = indexOfLastHelper - helpersPerPage;
    const currentHelpers = helper.slice(indexOfFirstHelper,indexOfLastHelper);

    const paginate = (pageNumber) =>{
        setCurrPage(pageNumber)
    }


    return (
        <>
            <div id="help" className="row">
                <div className="col-12 help__container">
                    <h2 className="help__container-header">Komu pomagamy?</h2>
                    <img className={"help__container-img"} src={decoration} alt={"decoration"}/>
                    <div className="help__container-buttons">
                        <button className="help__button" onClick={handleToFoundation}>Fundacjom</button>
                        <button className="help__button " onClick={handleToOrganizations}>Organizacjom pozarządowym</button>
                        <button className="help__button" onClick={handleToLocals}>Lokalny zbiórkom</button>
                    </div>
                    <p className="help__container-text">W naszej bazie znajdziesz listę
                        zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
                        zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </div>
            <div className="row help__setup">
                <div className="col-10">
                    <Paginate items={currentHelpers}/>
                    <PaginationButtons postsPerPage={helpersPerPage} totalPosts={helper.length} paginate={paginate} />
                </div>
            </div>
        </>
    )
}