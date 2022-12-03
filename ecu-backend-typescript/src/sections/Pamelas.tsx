import React from "react";
import brownBackground from "../images/5.png";
import greyBackground from "../images/6.png";

const Pamelas: React.FC = () => {
  return (
    <>
      <section className="images-section">
        <div className="container">
          <div className="brown-image" style={{ backgroundColor: "#75695c" }}>
            <img src={brownBackground} alt="brown"></img>
            <div className="brown-image-text">
              <h1>Pamela Reif's</h1>
              <h1>Top Picks</h1>
              <button className="btn-dark">
                SHOP NOW
                <span className="corner-topLeft"></span>
                <span className="corner-bottomRight"></span>
              </button>
            </div>
          </div>
          <div className="grey-image" style={{ backgroundColor: "#d9d9d9" }}>
            <img src={greyBackground} alt="grey"></img>
            <div className="grey-image-text">
              <h1>Let's Be</h1>
              <h1>Conscious</h1>
              <button className="btn-light">
                FLASH SALE
                <span className="corner-topLeft"></span>
                <span className="corner-bottomRight"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pamelas;
