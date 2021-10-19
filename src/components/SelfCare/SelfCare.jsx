import React from "react";

import iconSelfCare from "../../assets/icon-self-care.svg"
import iconEllipsis from "../../assets/icon-ellipsis.svg";

function SelfCare({objData}) {
  return (
    
      <section className="container_card selfcare">
        <div className="container_img img_selfcare">
          <img src={iconSelfCare} alt="" />
        </div>
        <div>
          <h4> {objData[5].title}</h4>
          <button>
            {" "}
            <img src={iconEllipsis} alt="" />
          </button>
        </div>
        <p className="growth">{objData[5].timeframes.weekly.current}hrs</p>
        <p className="normal">
          Last Week - {objData[5].timeframes.weekly.previous}hrs
        </p>
      </section>
    
  );
}

export default SelfCare;
