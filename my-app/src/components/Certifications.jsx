// src/components/Certifications.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Certifications = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Certifications
    </Typography>
    <List>
      <ListItem> NodeJS Case Study - Movie App on Node JS and MongoDB</ListItem>
      <ListItem>The Complete 2024 Web Development Bootcamp</ListItem>
    </List>
  </Box>
);

export default Certifications;
