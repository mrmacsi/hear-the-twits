import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Hear the Twits</h1>
      Your twitter history
      <br/>
      <br/>
      <Link className="btn light-blue" to="/twits">See Latest Twits</Link>
    </div>
  );
};

export default Landing;