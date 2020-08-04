import React, {useEffect, useState} from "react";
import decoration from "../assets/shirt.svg";
import foundations from "../data/foundations";
import organization from "../data/organization";
import local from "../data/local";
import {Paginate} from "./Paginate";
import {PaginationButtons} from "./PaginationButtons";

export const Help = () => {
    const [helper, setHelper] = useState(foundations);
    const [currPage, setCurrPage] = useState(1);
    const [helpersPerPage] = useState(3);
    const [activeFoundation, setActiveFoundation] = useState('help__button');
    const [activeOrg, setActiveOrg] = useState('help__button');
    const [activeLocal, setActiveLocal] = useState('help__button');
    const handleToFoundation = () => {
        setHelper(foundations);
        whoIsActive();
        setCurrPage(1);
    }
    const handleToOrganizations = () => {
        setHelper(organization);
        whoIsActive();
        setCurrPage(1);
    }
    const handleToLocals = () => {
        setHelper(local);
        whoIsActive();
        setCurrPage(1);
    }
    const paginate = (pageNumber) => {
        setCurrPage(pageNumber);
    }
    const whoIsActive = () => {
        if (helper === foundations) {
            setActiveFoundation("help__button active");
            setActiveLocal("help__button");
            setActiveOrg("help__button");
        } else if (helper === organization) {
            setActiveOrg("help__button active");
            setActiveFoundation("help__button");
            setActiveLocal("help__button");
        } else if (helper === local) {
            setActiveOrg("help__button ");
            setActiveFoundation("help__button");
            setActiveLocal("help__button active");
        }
    }
    useEffect(() => {
        whoIsActive();
    }, [handleToFoundation, handleToOrganizations, handleToLocals]);
    const indexOfLastHelper = currPage * helpersPerPage;
    const indexOfFirstHelper = indexOfLastHelper - helpersPerPage;
    const currentHelpers = helper.slice(indexOfFirstHelper, indexOfLastHelper);
    return (
        <>
            <div id="help" className="row">
                <div className="col-12 help__container">
                    <h2 className="help__container-header">Komu pomagamy?</h2>
                    <img className="help__container-img" src={decoration} alt={"decoration"}/>
                    <div className="help__container-buttons">
                        <button className={activeFoundation} onClick={handleToFoundation}>Fundacjom</button>
                        <button className={activeOrg} onClick={handleToOrganizations}>Organizacjom pozarządowym</button>
                        <button className={activeLocal} onClick={handleToLocals}>Lokalny zbiórkom</button>
                    </div>
                    <p className="help__container-text">W naszej bazie znajdziesz listę
                        zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
                        zajmują, komu pomagają i czego potrzebują.
                    </p>
                </div>
            </div>
            <div className="row help__setup">
                <Paginate items={currentHelpers}/>
                <PaginationButtons currPage={currPage} postsPerPage={helpersPerPage} totalPosts={helper.length} paginate={paginate}/>
            </div>
        </>
    )
}