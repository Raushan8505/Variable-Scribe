import React from 'react';
import '../components/Essential.css'
import community from "../assets/Community.jpg";

const Essential = () => {
  return (
    <div className="container">
      <div className="wrap1">
        <h4 className="h4">TEAM ESSENTIALS</h4>
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
