import React from "react";

import iconPlay from "../../assets/icon-play.svg";
import iconEllipsis from "../../assets/icon-ellipsis.svg";

function Play({ objData }) {
  return (
    <section className="container_card play">
      <div className="container_img img_play">
        <img src={iconPlay} alt="" />
      </div>
      <div>
        <h4> {objData[1].title}</h4>
        <button>
          {" "}
          <img src={iconEllipsis} alt="" />
        </button>
      </div>
      <p className="growth">{objData[1].timeframes.weekly.current}hrs</p>
      <p className="normal">
        Last Week - {objData[1].timeframes.weekly.previous}hrs
      </p>
    </section>
  );
}

export default Play;
