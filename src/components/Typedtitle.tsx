import React from "react";
// import "./stars.scss";
import Typed, { ReactTyped } from "react-typed";

class Intro extends React.Component {
  render() {
    return (
        <div className="intro-content display-table text-white text-4xl">
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Upendo Tech",
                      "Bringing Africa into the age of AI"
                      
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
        </div>
    );
  }
}

export default Intro;
