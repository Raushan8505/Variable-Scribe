// Career.jsx
import React from 'react';
import '../Atlasian_Homepage/Career.css';
import careerLeft from "../../assets/Home_Imgs/CareersLeft.svg";
import careerRight from "../../assets/Home_Imgs/CareersRight.svg";

const Career = () => {
  return (
    <div className="Container"> {/* Add class name for CSS */}
        <h4 className="H4">CAREERS</h4>
        <h1 className="H1">We can’t do it alone</h1>
        <div className="Para">We have an ambitious road ahead, and we’re looking for people to <br/>join our global team to help shape the future of Atlassian.</div>
        <button className="Button">Join the team</button>
        
    </div>
  );
};

export default Career;
