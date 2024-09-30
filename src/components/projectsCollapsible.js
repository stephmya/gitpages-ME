import React, { useState } from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Paper from "@mui/material/Paper";

const theme = createTheme();

const projects = [
  {
    id: 1,
    name: "MCCI Kill Sound LMS Extension",
    description:
      "This was a quick ~ 4 hour project to fulfill a request of a friend. This is a very simple chrome extension that adds a listener for a submission button and onClick to play a sound bite.",
    details: (
      <>
        <br />
        Check out the Chrome Web Store listing{" "}
        <a
          href="https://chromewebstore.google.com/detail/mcci-kill-sound-lms-exten/kocelpkjababefelbcbkijgokiencpom"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        and check it out on GitHub{" "}
        <a
          href="https://github.com/stephmya/skybattle-assignment-submission-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </>
    ),
    extraDetails: (
      <>
        <h4>
          I built this project using React and Material UI which I am
          ~intimately~ familiar with but I am not as familiar with developing
          Chrome Extensions the touchy specifications it has sometimes.
        </h4>
        <ul>
          <li>
            My primary issue was that I expected to build different cases for
            each LMS but realized that doing so was both unreasonable and did
            not really work. (I tried to use mutation detectors for Google
            Classroom and just an onClick listener for D2L (god forbid I write
            more than 2 functions smh))
          </li>
          <li>
            I was testing using D2L and Google Classroom and using different
            cases would cause context and initialization errors making it "flip
            flop" by working on one site but not the other.
          </li>
          <li>
            This was quickly resolved by doing the simplest option (that I
            should have started with) and just looking for a button with a
            submission related text on select few websites and using an onCLick
            listener. (Submit, Post, Reply, etc.) This let me add compatibility
            that I couldn't personally test until I shared it with a few peers
            who tested it on their LMS for me.
          </li>
        </ul>
      </>
    ),
  },
];

const CollapsibleRow = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [extraOpen, setExtraOpen] = useState(false);

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          {project.name}
        </Typography>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box margin={1}>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {project.description}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {project.details}
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="expand extra details"
              size="small"
              onClick={() => setExtraOpen(!extraOpen)}
            >
              {extraOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              What I learned
            </Typography>
          </Box>
          <Collapse in={extraOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                {project.extraDetails}
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Collapse>
    </>
  );
};

const Projects = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "gray",
          padding: 2,
        }}
      >
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
            Projects
          </Typography>
          {projects.map((project) => (
            <CollapsibleRow key={project.id} project={project} />
          ))}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Projects;
