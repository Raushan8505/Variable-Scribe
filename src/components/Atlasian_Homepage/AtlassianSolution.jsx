import React from "react";
import Solution3 from "../../assets/Home_Imgs/solution3.png";
import CompaniesImage from "../../assets/Home_Imgs/companies.png"; 
import JiraSoftware from "../../assets/Home_Imgs/jiraSoftware.png";
import Compass from "../../assets/Home_Imgs/compass.png";

import "../Atlasian_Homepage/AtlasianSolution.css";

const AtlassianSolution = () => {
  return (
    <div>
      <div className="atlassian-container">
        <h1 className="atlassian-h1">
          Atlassian solutions are designed for all types of work
        </h1>
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
          <div className="atlassian-wrap">
            <button className="atlassian-button">
              Business Management
            </button>
            <button className="atlassian-button">
              Project Management
            </button>
          </div>
          <div className="cards_and_imgs">
            <div className="cards">
              <div className="atlassian-card">
                <div className="card-content">
                  <img src={Compass} className="atlassian-image" alt="Avatar" />
                  <div className="atlassian-group">
                    <h5>POS</h5>
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
                    <h5>Trello</h5>
                    <p>Project and issue tracking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="atlassian-sect2">
              <img src={Solution3} alt="Solution" />
            </div>
          </div>
        </div>
      </div>
      <div className="company">
        <img src={CompaniesImage} alt="Company Image" />
      </div>
    </div>
  );
};

export default AtlassianSolution;
