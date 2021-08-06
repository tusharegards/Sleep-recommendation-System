import React from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Plotter from "views/index-sections/Plotter"

import statimg from "assets/img/stat.jpg"

const Statistics = () => {
    return (
        <>
             
             <IndexHeader img={statimg} heading={"SLEEPSTAT"}/>
            <Plotter/>
        </>
    )
}

export default Statistics
