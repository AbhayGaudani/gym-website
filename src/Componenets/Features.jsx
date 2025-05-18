import React from "react";
import FeatureBox from "./FeatureBox";
import image1 from "/Images/1.svg";
import image2 from "/Images/2.svg";
import image3 from "/Images/3.svg";
import image4 from "/Images/4.svg";

function Features(props) {
  return (
    <>
      <div id="features">
        <div className="feature-heading">
          <h1>Features</h1>
        </div>
        <div className="a-container">
          <FeatureBox image={image1} title="WeightLifting" />
          <FeatureBox image={image2} title="Specific Muscle" />
          <FeatureBox image={image3} title="Flex Your Muscle" />
          <FeatureBox image={image4} title="Cardio Exercise" />
        </div>
      </div>
    </>
  );
}

export default Features;
