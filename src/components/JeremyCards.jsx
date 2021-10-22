import React from "react";
import "./JeremyCards.css";

import jeremy from "../assets/image-jeremy.png";
import iconWork from "../assets/icon-work.svg";
import iconPlay from "../assets/icon-play.svg";
import iconStudy from "../assets/icon-study.svg";
import iconExercise from "../assets/icon-exercise.svg";
import iconSocial from "../assets/icon-social.svg";
import iconSelfCare from "../assets/icon-self-care.svg";
import iconEllipsis from "../assets/icon-ellipsis.svg";

function JeremyCards({ objData }) {
  console.log(objData);
  return (
    <main>
      <section className="container_jeremy">
        <div className="jeremy_profile">
          <img src={jeremy} alt="Imagem Jeremy" />
          <p>Report for </p>
          <p className="growth">Jeremy Robson</p>
        </div>

        <div className="periods">
          <button>Daily</button> <button>Weekly</button>
          <button>Monthly</button>
        </div>
      </section>

      <section className="container_cards">
        <div className="card work">
          <div className="img">
            <img src={iconWork} alt="icon work" />
          </div>
          <div className="info">
            <span>
              <p>{objData[0].title}</p>

              <img src={iconEllipsis} alt="icon ellipsis" />
            </span>
            <p className="growth"> {objData[0].timeframes.weekly.current}hrs</p>
            <p>Last Week - {objData[0].timeframes.weekly.previous}hrs</p>
          </div>
        </div>

        <div className="card play">
          <div className="img">
            <img src={iconPlay} alt="icon play" />
          </div>
          <div className="info">
            <span>
              <p>{objData[1].title}</p>
              <img src={iconEllipsis} alt="icon ellipsis" />
            </span>
            <p className="growth"> {objData[1].timeframes.weekly.current}hrs</p>
            <p>Last Week - {objData[1].timeframes.weekly.previous}hrs</p>
          </div>
        </div>

        <div className="card study">
          <div className="img">
            <img src={iconStudy} alt="icon study" />
          </div>
          <div className="info">
            <span>
              <p>{objData[2].title}</p>
              <img src={iconEllipsis} alt="icon ellipsis" />
            </span>
            <p className="growth"> {objData[2].timeframes.weekly.current}hrs</p>
            <p>Last Week - {objData[2].timeframes.weekly.previous}hrs</p>
          </div>
        </div>

        <div className="card exercise">
          {" "}
          <div className="img">
            <img src={iconExercise} alt="icon exercise" />
          </div>
          <div className="info">
            <span>
              <p>{objData[3].title}</p>
              <img src={iconEllipsis} alt="icon ellipsis" />
            </span>
            <p className="growth"> {objData[3].timeframes.weekly.current}hrs</p>
            <p>Last Week - {objData[3].timeframes.weekly.previous}hrs</p>
          </div>
        </div>

        <div className="card social">
          {" "}
          <div className="img">
            <img src={iconSocial} alt="icon social" />
          </div>
          <div className="info">
            <span>
              <p>{objData[4].title}</p>
              <img src={iconEllipsis} alt="icon ellipsis" />
            </span>
            <p className="growth"> {objData[4].timeframes.weekly.current}hrs</p>
            <p >Last Week - {objData[4].timeframes.weekly.previous}hrs</p>
          </div>
        </div>

        <div className="card self">
          {" "}
          <div className="img">
            <img src={iconSelfCare} alt="icon self" />
          </div>
          <div className="info">
            <span>
              <p>{objData[5].title}</p>

              <img src={iconEllipsis} alt="icon ellipsis" />
            </span>
            <p className="growth"> {objData[5].timeframes.weekly.current}hrs</p>
            <p>Last Week - {objData[5].timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default JeremyCards;
