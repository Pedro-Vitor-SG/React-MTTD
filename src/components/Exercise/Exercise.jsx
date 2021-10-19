import React from "react";

import iconExercise from "../../assets/icon-exercise.svg";
import iconEllipsis from "../../assets/icon-ellipsis.svg"

function Exercise({objData}) {
  return (
    
      <section className="container_card exercise">
        <div className="container_img img_exercise">
          <img src={iconExercise} alt="" />
        </div>
        <div>
          <h4> {objData[3].title}</h4>
          <button>
            {" "}
            <img src={iconEllipsis} alt="" />
          </button>
        </div>
        <p className="growth">{objData[3].timeframes.weekly.current}hrs</p>
        <p className="normal">
          Last Week - {objData[3].timeframes.weekly.previous}hrs
        </p>
      </section>
    
  );
}

export default Exercise;
