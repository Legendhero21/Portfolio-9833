// src/components/Header.js
import React from "react";
import { Typography, Link } from "@mui/material";

const Header = () => (
  <header>
    <Typography variant="h3" component="h1" gutterBottom>
      Vedant Goraksha
    </Typography>
    <Typography variant="body1">Phone: +91 7045033488</Typography>
    <Typography variant="body1">Email: <Link href="mailto:gvedant2104@gmail.com">gvedant2104@gmail.com</Link></Typography>
    <Typography variant="body1">
      LinkedIn: <Link href="https://www.linkedin.com/in/vedant-goraksha/" target="_blank" rel="noopener noreferrer">
        Vedant Goraksha
      </Link>
    </Typography>
  </header>
);

export default Header;
