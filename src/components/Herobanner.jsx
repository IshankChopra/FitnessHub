import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import banner from "../assets/images/banner.png";

const Herobanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#00FF00" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat Today, <br />
        Smile Tomorrow.
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="success"
        href="#exercises"
        sx={{ backgroundColor: "#00FF00", padding: "10px" }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#00FF00"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>

      <img src={banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default Herobanner;
