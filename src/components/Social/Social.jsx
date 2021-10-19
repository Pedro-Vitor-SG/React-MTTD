import React from "react";

import iconSocial from "../../assets/icon-social.svg";
import iconEllipsis from "../../assets/icon-ellipsis.svg";

function Social({ objData }) {
  return (
   
      <section className="container_card social">
        <div className="container_img img_social">
          <img src={iconSocial} alt="" />
        </div>
        <div>
          <h4> {objData[4].title}</h4>
          <button>
            {" "}
            <img src={iconEllipsis} alt="" />
          </button>
        </div>
        <p className="growth">{objData[4].timeframes.weekly.current}hrs</p>
        <p className="normal">
          Last Week - {objData[4].timeframes.weekly.previous}hrs
        </p>
      </section>
   
  );
}

export default Social;
