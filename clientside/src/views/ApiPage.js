import React from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import IndexHeader from "components/Headers/IndexHeader.js";
import SectionDark from "views/index-sections/SectionDark.js";
const ApiPage = () => {
    return (
        <>
             <IndexNavbar />
            <SectionDark/>
            hello from API
            <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note">API for Hospitals</span>
            medical professional can directly request data streamers from 
            <span/>
            localhost:5000/api/O2
          </h6>
        </div>
        <footer className="blockquote-footer">
           <cite title="source Title">soon in production</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note">API for developers</span>
            developers can directly request data streamers using fitbit or apple
            localhost:5000/api/fitbit
            <span/>
            localhost:5000/api/iWatch
          </h6>
        </div>
        <footer className="blockquote-footer">
           <cite title="source Title">soon in production</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note">API for rating your sleep</span>
            developers can directly request data streamers using fitbit or apple
            <span/>
            localhost:5000/api/sleepRating
            <span/>
            to recieve data stats
            <span/>
            localhost:5000/api/sleepMonitor
          </h6>
        </div>
        <footer className="blockquote-footer">
           <cite title="source Title">soon in production</cite>
        </footer>
      </blockquote>
        </>
    )
}

export default ApiPage
