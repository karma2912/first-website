import React from "react";
import "./FifthPage.css";
import FifthPageComponent from "./FifthPageComponent";
import bed1 from "./newBed1.jpg"
import stairs from "./stairs.jpg"
import corridor from "./corridor.jpg"
import random1 from "./random1.avif"
import random2 from "./random2.jpg"
import random3 from "./random3.jpg"

const FifthPage = () => {
  return (
    <>
      <section className="fifth-section">
        <div className="fifth-title">What People Say <br/> About Dwello</div>
        <div className="fifth-upper-card">
            <div className="fifth-cards">
            <FifthPageComponent image={bed1} profile={random1} name="Adolf Hitler" location="New York"/>
            </div>
            <div className="fifth-cards">
            <FifthPageComponent image={stairs} profile={random2} name="Issac Newton" location="San Diego"/>
            </div>
            <div className="fifth-cards">
            <FifthPageComponent image={corridor} profile={random3} name="Pablo Escobar" location="California"/>
            </div>
        </div>
      </section>
    </>
  );
};

export default FifthPage;
