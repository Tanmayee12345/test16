
import React from "react";

function About() {
  const divStyle = {
    backgroundImage: `url("https://images8.alphacoders.com/496/thumb-1920-496002.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const pStyle = {
    paddingLeft: "580px", // Adjust as needed
    fontSize: "30px",
  };
  const hStyle = {
    paddingLeft: "580px", // Adjust as needed
    fontSize: "50px",
    color:"yellow"
  };
  

  return (
    <div style={divStyle}>
      <div>
        <h1 style={hStyle}> About me</h1>
      <p style={pStyle}>
          I am self-motivated, responsible, hard-working person. I am able to work well both in a team as well as on my initiative. I am flexible with timekeeping skills, energetic, and eager to learn new skills.
        </p>
        
      </div>
    </div>
  );
}

export default About;







