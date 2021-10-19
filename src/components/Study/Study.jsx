import React from "react";

import iconStudy from "../../assets/icon-study.svg";
import iconEllipsis from "../../assets/icon-ellipsis.svg";

function Study({ objData }) {
  return (
    <section className="container_card study">
      <div className="container_img img_study">
        <img src={iconStudy} alt="" />
      </div>
      <div>
        <h4> {objData[2].title}</h4>
        <button>
          {" "}
          <img src={iconEllipsis} alt="" />
        </button>
      </div>
      <p className="growth">{objData[2].timeframes.weekly.current}hrs</p>
      <p className="normal">
        Last Week - {objData[2].timeframes.weekly.previous}hrs
      </p>
    </section>
  );
}

export default Study;
