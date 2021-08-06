import React from "react";
import {Button} from "reactstrap"
// reactstrap components
import { Container, Row, Col } from "reactstrap";

const content = [
  {
    header: "Drink Plenty Of water",
    reason: "malabsorption found in food",
  },
  {
    header: "Exercise for Atleast 30 minutes today",
    reason: "lack of movement discovered",
  },
  {
    header: "Honey with water in the night can relieve your stress",
    reason: "need to reboost carbs",
  },
  {
    header: "try to maditate for minutes before sleeping",
    reason: "decluttering is advisable",
  },
  {
    header: "walk outside for 15 minutes to relax",
    reason: "not enough movement",
  },
  {
    header: "take a hot shower to optimize your sleep",
    reason: "overstressed today",
  },
  {
    header: "do oil pulling for clearing your throat",
    reason: "clean throat and nose, lots of snorin last night",
  },
  {
    header: "listen to light music for 10 minutes for mindfullness",
    reason: "take leisure",
  },
  {
    header: "try to listen to silence for a few minutes in bed",
    reason: "high noise exposure",
  },
  {
    header: "reduce light brightness in your room",
    reason: "high brightness exposure",
  },
  {
    header: "try to sleep Early in the night",
    reason: "late night sleep is destructive",
  },
];

let headerOne = ''
let reasonOne = ''
let headerTwo = ''
let reasonTwo = ''
let headerThree = ''
let reasonThree = ''

const SectionRecommends = () => {
  const [recommend, setRecommend] = React.useState(false);
  const setRecommendation = () => {
    let indice = Math.floor(Math.random() * 9);

    headerOne = content[indice].header;
    reasonOne = content[indice].reason;
    headerTwo = content[indice+1].header;
    reasonTwo = content[indice+1].reason
    headerThree = content[indice+2].header
    reasonThree = content[indice+3].header

    setRecommend(true);
  };
  return (
    <div className="typography-line">
      <span className="note"></span>
      <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note">Recommeded</span>
            {headerOne}
          </h6>
        </div>
        <footer className="blockquote-footer">
          {reasonOne} <cite title="source Title">on wednesday</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note">Recommeded</span>
            {headerTwo}
          </h6>
        </div>
        <footer className="blockquote-footer">
          {reasonTwo} <cite title="source Title">on wednesday</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note">Recommeded</span>
            {headerThree}
          </h6>
        </div>
        <footer className="blockquote-footer">
          {reasonThree} <cite title="source Title">on wednesday</cite>
        </footer>
      </blockquote>
      <Button onClick={setRecommendation}>Recommedations</Button>
    </div>
  );
};

export default SectionRecommends;
