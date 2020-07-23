import React, {useEffect, useState} from "react";
import decoration from "../assets/decoration.svg";
import foundations from "../data/foundations";
import organization from "../data/organization";
import local from "../data/local";
import {Paginate} from "./Paginate";
import {PaginationButtons} from "./PaginationButtons";

export const Help = () => {
    const [helper,setHelper] = useState(foundations);
    const [currPage,setCurrPage] = useState(1);
    const [helpersPerPage] = useState(3);
    const [whoFun, setWhoFun] = useState('help__button');
    const [whoOrg, setWhoOrg] = useState('help__button');
    const [whoLoc, setWhoLoc] = useState('help__button');

    const handleToFoundation = () =>{
        setHelper(foundations);
        whoIsActive()
        setCurrPage(1)
    }

    const handleToOrganizations = () =>{
        setHelper(organization);
        whoIsActive2()
        setCurrPage(1)
    }

    const handleToLocals = () =>{
        setHelper(local);
        whoIsActive3()
        setCurrPage(1)
    }

    const indexOfLastHelper = currPage * helpersPerPage;
    const indexOfFirstHelper = indexOfLastHelper - helpersPerPage;
    const currentHelpers = helper.slice(indexOfFirstHelper,indexOfLastHelper);

    const paginate = (pageNumber) =>{
        setCurrPage(pageNumber)
    }

    const whoIsActive = () =>{
        if(helper === foundations) {
            setWhoFun("help__button active")
        }else{
            setWhoFun("help__button")
        }
    }
    const whoIsActive2 = () =>{
        if(helper === organization) {
            setWhoOrg("help__button active")
        }else{
            setWhoOrg("help__button")
        }
    }
    const whoIsActive3 = () =>{
        if(helper === local) {
            setWhoLoc("help__button active")
        }else{
            setWhoLoc("help__button")
        }
    }

    useEffect(() =>{
        whoIsActive()
        whoIsActive2()
        whoIsActive3()
    },[handleToFoundation, handleToOrganizations,handleToLocals])


    return (
        <>
            <div id="help" className="row">
                <div className="col-12 help__container">
                    <h2 className="help__container-header">Komu pomagamy?</h2>
                    <img className="help__container-img" src={decoration} alt={"decoration"}/>
                    <div className="help__container-buttons">
                        <button className={whoFun} onClick={handleToFoundation}>Fundacjom</button>
                        <button className={whoOrg}  onClick={handleToOrganizations}>Organizacjom pozarządowym</button>
                        <button className={whoLoc}  onClick={handleToLocals}>Lokalny zbiórkom</button>
                    </div>
                    <p className="help__container-text">W naszej bazie znajdziesz listę
                        zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
                        zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </div>
            <div className="row help__setup">
                    <Paginate items={currentHelpers}/>
                    <PaginationButtons postsPerPage={helpersPerPage} totalPosts={helper.length} paginate={paginate}/>
                </div>
        </>
    )
}