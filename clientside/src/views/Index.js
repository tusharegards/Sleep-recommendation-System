import React from "react";

// reactstrap components
//images used
import homewall from "assets/img/homewall.jpg";
import overlay from "assets/img/clouds.png";
// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//pages used
import Presentation from "views/index-sections/Presentation";
// index sections unused
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
// import SectionDark from "views/index-sections/SectionDark.js";
// import SectionLogin from "views/index-sections/SectionLogin.js";
// import SectionExamples from "views/index-sections/SectionExamples.js";
// import SectionDownload from "views/index-sections/SectionDownload.js";

// import NucleoIcons from "views/NucleoIcons";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      
      <IndexHeader
        img={homewall}
        overlay={overlay}
        title={"CONSTRUCT YOUR SLEEP"}
        heading={"SLEEP-EON"}
      />
      <div className="main">
        <Presentation />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
