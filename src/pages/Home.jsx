import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import Herobanner from "../components/Herobanner";
import Searchexercises from "../components/Searchexercises";

const Home = () => {
  return (
    <Box>
      <Herobanner />
      <Searchexercises />
      <Exercises />
    </Box>
  );
};

export default Home;
