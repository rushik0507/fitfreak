import React, { useState, useEffect } from "react";

const Sidebar = ({ changeMid }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState("all equipment");
  const [selectedMuscle, setSelectedMuscle] = useState("all muscles");

  useEffect(() => {
    fetch("/final.json")
      .then((response) => response.json())
      .then((data) => {
        if (
          selectedMuscle.toLowerCase() === "all muscles" &&
          selectedEquipment.toLowerCase() === "all equipment"
        ) {
          setExercises(data);
        } else if (selectedMuscle.toLowerCase() === "all muscles") {
          var Exercises = data.filter(
            (exercise) =>
              exercise.equipment.toLowerCase() ===
              selectedEquipment.toLowerCase()
          );
          setExercises(Exercises);
        } else if (selectedEquipment.toLowerCase() === "all equipment") {
          var Exercises = data.filter(
            (exercise) =>
              exercise.muscle.toLowerCase() === selectedMuscle.toLowerCase()
          );
          setExercises(Exercises);
        } else {
          var Exercises = data.filter(
            (exercise) =>
              exercise.muscle.toLowerCase() === selectedMuscle.toLowerCase() &&
              exercise.equipment.toLowerCase() ===
                selectedEquipment.toLowerCase()
          );
          setExercises(Exercises);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedEquipment, selectedMuscle]); // Empty dependency array means this effect runs once after the first render

  return (
    <div className="sidebar">
      <div className="side-main">
        <div className="side-title">
          <span>Library</span>
          <span>
            <i
              className="fa-solid fa-xmark"
              id="sideclose"
              style={{ color: "#929da5" }}
            ></i>
          </span>
        </div>
        <div className="side-categories">
          <select
            id="select-equipment"
            onChange={(event) => setSelectedEquipment(event.target.value)}
          >
            <option value="All Equipment">All Equipment</option>
            <option value="None">None</option>
            <option value="Barbell">Barbell</option>
            <option value="Dumbbell">Dumbbell</option>
            <option value="Kettlebell">Kettlebell</option>
            <option value="Machine">Machine</option>
            <option value="Plate">Plate</option>
            <option value="Resistance Band">Resistance Band</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="side-muscle">
          <select
            id="select-muscle"
            onChange={(event) => setSelectedMuscle(event.target.value)}
          >
            <option value="All Muscles">All Muscles</option>
            <option value="Abdominals">Abdominals</option>
            <option value="Abductors">Abductors</option>
            <option value="Adductors">Adductors</option>
            <option value="Biceps">Biceps</option>
            <option value="Lower Back">Lower Back</option>
            <option value="Upper Back">Upper Back</option>
            <option value="Cardio">Cardio</option>
            <option value="Chest">Chest</option>
            <option value="Calves">Calves</option>
            <option value="Forearms">Forearms</option>
            <option value="Glutes">Glutes</option>
            <option value="Hamstrings">Hamstrings</option>
            <option value="Lats">Lats</option>
            <option value="Quadriceps">Quadriceps</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Triceps">Triceps</option>
            <option value="Traps">Traps</option>
            <option value="Neck">Neck</option>
            <option value="Full Body">Full Body</option>
          </select>
        </div>

        <div className="side-section">
          {exercises.length === 0 ? (
            <div className="section-title tcolor">
              <p className="tcolor">No Data Found</p>
            </div>
          ) : (
            exercises.map((exercise, index) => (
              <div
                key={index}
                className="side-exercise"
                onClick={() => changeMid(exercise)}
              >
                <div className="ex-image">
                  <img src={exercise.src} alt="" />
                </div>
                <div className="ex">
                  <div className="ex-name">{exercise.name}</div>
                  <div className="ex-muscle">{exercise.muscle}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
