// Main.js
// Main.js
import React, { useState } from "react";
// import data from './newfinal.json'; // Import your JSON data

const Main = ({ selectedExercise, changeMid }) => {
  console.log(selectedExercise);

  return (
    <div className="main">
      <div className="main-mid">
        <div className="main-title">Exercises</div>
        <div
          className="mid"
          style={{ display: selectedExercise ? "none" : "block" }}
        >
          <div className="mid-title">Select Muscle</div>
          <div className="mid-image">
            <img src="./images/muscle map.jfif" alt="" />
          </div>
        </div>

        {selectedExercise && (
          <div
            className="mid2"
            style={{ display: selectedExercise ? "block" : "none" }}
          >
            <div className="mid-title">{selectedExercise.name}</div>
            <div className="mid-image2">
              {selectedExercise.isvideo ? (
                <video
                  autoPlay={true}
                  loop={true}
                  src={selectedExercise.main}
                ></video>
              ) : (
                <img src={selectedExercise.main}></img>
              )}
            </div>
            <div className="mid2-info"> 
              <p>
                Primary Muscle Group:<span>{selectedExercise.muscle}</span>
              </p>
              <p>
                Equipment:<span>{selectedExercise.equipment}</span>
              </p>
              <p>Steps:</p>
              <p>undefined</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
