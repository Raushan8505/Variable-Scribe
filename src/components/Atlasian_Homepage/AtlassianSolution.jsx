import React, { useState } from "react";
import Solution3 from "../../assets/Home_Imgs/solution3.png";
import JiraSoftware from "../../assets/Home_Imgs/jiraSoftware.png";
import compass from "../../assets/Home_Imgs/compass.png";
import companies from "../../assets/Home_Imgs/companies.png";

import "../Atlasian_Homepage/AtlasianSolution.css";

const AtlassianSolution = () => {
  const [showWork, setShowWork] = useState(false);
  const changeWorkShow = () => {
    setShowWork(!showWork);
  };
  const [showService, setShowService] = useState(false);
  const changeServiceShow = () => {
    setShowService(!showService);
  };

  return (
    <div className="atlassian-container">
      <h1 className="atlassian-h1">
        Atlassian solutions are designed for all types of work
      </h1>
      <div className="atlassian-wrap">
        <button className="atlassian-button" onClick={changeWorkShow}>
          Business Management
        </button>
        <button className="atlassian-button" onClick={changeServiceShow}>
          Project Management
        </button>
      </div>

      <div className="text_and_img">
        <div className="card_text">
        <div className="atlassian-sect1">
          <div className="atlassian-h2">
            Run a best Project Management and Business Management software
            <br />
            company—from discovery to
            <br />
            delivery and operations
          </div>
        </div>
          <div className="cards">
            <div className="atlassian-card">
              <div className="card-content">
                <img src={compass} className="atlassian-image" alt="Avatar" />
                <div className="atlassian-group">
                  <h5>Compass</h5>
                  <p>Business Management</p>
                </div>
              </div>
            </div>
            <div className="atlassian-card">
              <div className="card-content">
                <img
                  src={JiraSoftware}
                  className="atlassian-image"
                  alt="Avatar"
                />
                <div className="atlassian-group">
                  <h5>POS</h5>
                  <p>Project and issue tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="atlassian-sect2">
          <img src={Solution3} alt="Solution" />
        </div>


        <div className="company">
          <img src={companies} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AtlassianSolution;
