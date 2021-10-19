import React from "react";

import iconWork from "../../assets/icon-work.svg";
import iconEllipsis from "../../assets/icon-ellipsis.svg";

function Work({ objData }) {
  return (
   
      <section className="container_card work">
        <div className="container_img img_work">
          <img src={iconWork} alt="" />
        </div>
        <div>
          <h4> {objData[0].title}</h4>
          <button>
            <img src={iconEllipsis} alt="" />
          </button>
        </div>
        <p className="growth">{objData[0].timeframes.weekly.current}hrs</p>
        <p className="normal">
          Last Week - {objData[0].timeframes.weekly.previous}hrs
        </p>
      </section>
   
  );
}

export default Work;
