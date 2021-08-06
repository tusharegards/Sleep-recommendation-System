import React, { Component } from 'react'

//images used
import recommend from "assets/img/recommend.jpg";
import overlay from "assets/img/clouds.png";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionRecommends from "views/index-sections/SectionRecommends"
export class Recommendation extends Component {
    render() {
        return (
            <div>
              
      <IndexHeader
        img={recommend}
        overlay={overlay}
        title={"read recomendations @ sleep eon"}
        heading={"to Improve Your Sleep"}
      />
      <SectionRecommends/>
            </div>
        )
    }
}

export default Recommendation