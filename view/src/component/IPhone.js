import React, { useEffect } from "react";
import "../assests/Iphone.css";

// import "swiper/swiper-bundle.css";
import AllProduct from "./AllProduct";

export default function IPhone() {

  return (
    <div>
      <div>
        <div className="row">
          <div className="col">
            <div className="legend-container">
              <img
                src={require("../images/iPhone14Backgroundedit.png")}
                alt=""
                className="background_slider"
              />
            </div>{" "}
          </div>
        </div>
        <div className="row">

        </div>
        <AllProduct/>
      </div>
    </div>
  );
}
