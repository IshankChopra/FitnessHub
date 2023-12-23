import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import Herobanner from "../components/Herobanner";
import Searchexercises from "../components/Searchexercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Herobanner />
      <Searchexercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
