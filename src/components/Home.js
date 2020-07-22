import React from "react";
import {Header} from "./Header";
import {ThreeColumns} from "./ThreeColumns";
import {Steps} from "./Steps";
import {About} from "./About";
import {Help} from "./Help";
import {Contact} from "./Contact";

export const Home = () => {

    return (
        <>
            <Header/>
            <ThreeColumns/>
            <Steps/>
            <About/>
            <Help/>
            <Contact/>
        </>
    )
}
