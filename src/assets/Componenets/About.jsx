import React from "react";
import aboutImg from "../Images/about.png";

function About() {
  return (
    <>
      <div id="about">
        <div className="about-img" id="about">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-text">
          <h1>LEARN MORE ABOUT US</h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            mollitia odit modi quisquam iure nesciunt quo. Quibusdam, ut nam
            facilis temporibus veniam ea minima a, cupiditate numquam aliquid
            ullam consequatur. Labore mollitia odit modi quisquam iure nesciunt
            quo. Quibusdam.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </>
  );
}

export default About;
