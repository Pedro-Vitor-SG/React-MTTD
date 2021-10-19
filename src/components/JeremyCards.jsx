import React from "react";
import "./JeremyCards.css";

import jeremy from "../assets/image-jeremy.png";

import Work from "./Work/Work";
import Play from "./Play/Play";
import Study from "./Study/Study";
import Exercise from "./Exercise/Exercise";
import Social from "./Social/Social";
import SelfCare from "./SelfCare/SelfCare";

function JeremyCards({ objData }) {
  const objMain = objData;

  console.log(objData);
  return (
    <main className="container_main">
      <section className="container_user">
        <div className="container_info">
          <img src={jeremy} alt="" />
          <p>Report for </p>
          <p className="growth"> Jeremy Robson</p>
        </div>

        <div className="container_periods">
          <button>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
        </div>
      </section>

      <div className="container_cards">
        <div className="card work">
          <Work objData={objMain} />
        </div>
        <div className="card work">
          <Play objData={objMain} />
        </div>
        <div className="card work">
          <Study objData={objMain} />
        </div>
        <div className="card work">
          <Exercise objData={objMain} />
        </div>
        <div className="card work">
          <Social objData={objMain} />
        </div>
        <div className="card work">
          <SelfCare objData={objMain} />
        </div>
      </div>
    </main>
  );
}

export default JeremyCards;
