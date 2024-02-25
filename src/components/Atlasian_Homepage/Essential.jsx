import React from 'react';
import '../Atlasian_Homepage/Essential.css'
import community from "../../assets/Home_Imgs/Community.jpg";

const Essential = () => {
  return (
    <div className="container">
      
      <div className="wrap1">
      <hr className='hr' />
        <h5 className="h5">TEAM ESSENTIALS</h5>
        <h1 className="h1">Explore resources to unleash the potential of your team</h1>
      </div>
      <div className="wrap2">
        <img className="image" src={community} alt="Atlassian Community"/>
        <div className="para">Atlassian Community</div>
        <div className="p">Connect globally and meet locally to get more out of our products.</div>
        <div className="set">
          <p>Search the forum</p>
          <p>Join our community</p>
        </div>
      </div>
    </div>
  );
}

export default Essential;
