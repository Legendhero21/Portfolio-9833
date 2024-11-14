// src/components/Header.js
import React from "react";
import { Typography, Link } from "@mui/material";

const Header = () => (
  <header>
    <Typography variant="h3" component="h1" gutterBottom>
      Anugu Navin Reddy
    </Typography>
    <Typography variant="body1">Phone: +91 9321008271</Typography>
    <Typography variant="body1">Email: <Link href="mailto:gvedant2104@gmail.com">crce.9815.ecs@gmail.com</Link></Typography>
    <Typography variant="body1">
      LinkedIn: <Link href="https://www.linkedin.com/in/vedant-goraksha/" target="_blank" rel="noopener noreferrer">
        Anugu Navin Reddy
      </Link>
    </Typography>
  </header>
);

export default Header;
