import React, { useState } from 'react';
import Sidebar from './Sidebar';
import App from './App';

const Container = () => {
  const [selectedExercise, setSelectedExercise] = useState();

  const changeMid = (name) => {
    setSelectedExercise(name);
  };

  return (
    <>
      <App selectedExercise={selectedExercise} changeMid={changeMid} />
      <Sidebar changeMid={changeMid} />
    </>
  );
};

export default Container;
