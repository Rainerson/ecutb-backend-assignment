import React from "react";
import imageOne from "../images/1.png";
import imageTwo from "../images/2.png";

const Showcase: React.FC = () => {
  return (
    <>
      <section className="gradient-background">
        <div className="showcase">
          <div className="container">
            <img src={imageOne} className="showcase-img-girl" alt="girl"></img>
            <div className="showcase-sale">
              <h1>SALE UP</h1>
              <h1>To 50% Off</h1>
              <p>Online shopping free home delivery over $100</p>
              <button className="btn-theme">
                SHOP NOW
                <span className="corner-topLeft"></span>
                <span className="corner-bottomRight"></span>
              </button>
            </div>
            <img src={imageTwo} className="showcase-img-man" alt="man"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
