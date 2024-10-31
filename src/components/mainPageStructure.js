import React, { useState } from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Box,
  Chip,
  Button,
  ButtonGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

const PortfolioPage = () => {
  const skills = [
    { name: "JavaScript", category: "Coding Languages" },
    { name: "C++", category: "Coding Languages" },
    { name: "Python", category: "Coding Languages" },
    { name: "Java", category: "Coding Languages" },
    { name: "Visual Basic", category: "Coding Languages" },
    { name: "OCAML", category: "Coding Languages" },
    { name: "Haskell", category: "Coding Languages" },
    { name: "Rust", category: "Coding Languages" },
    { name: "mySQL", category: "Coding Languages" },
    { name: "PostgreSQL", category: "Coding Languages" },
    { name: "React", category: "Coding Languages" },
    { name: "Node.js", category: "Coding Languages" },
    { name: "Express.js", category: "Coding Languages" },
    { name: "MongoDB", category: "Coding Languages" },
    { name: "julia", category: "Coding Languages" },
    { name: "Ruby", category: "Coding Languages" },

    { name: "FIGMA", category: "Diagramming" },
    { name: "UMLet", category: "Diagramming" },

    { name: "Microsoft Excel", category: "Miscellaneous" },
    { name: "MERN", category: "Miscellaneous" },
    { name: "MEAN", category: "Miscellaneous" },
    { name: "Material UI", category: "Miscellaneous" },
    { name: "Chrome Extensions", category: "Miscellaneous" },
    { name: "Web Development", category: "Miscellaneous" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Coding Languages");

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      {/* Left Sidebar */}
      <Grid item xs={12} md={4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            {/* LinkedIn */}
            <IconButton
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
              style={{ color: "#796D8A", marginRight: "10px" }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>

            {/* GitHub */}
            <IconButton
              onClick={() =>
                window.open("https://github.com/stephmya", "_blank")
              }
              style={{ color: "#796D8A", marginRight: "10px" }}
            >
              <GitHub fontSize="large" />
            </IconButton>

            {/* Email */}
            <IconButton
              onClick={() =>
                window.open("mailto:your-email@example.com", "_blank")
              }
              style={{ color: "#796D8A", marginRight: "10px" }}
            >
              <Email fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{ fontWeight: 600, color: "#333" }}
          >
            Competencies
          </Typography>
        </Box>
        {/* Button group to select category */}
        <ButtonGroup
          variant="contained"
          size="small"
          sx={{ marginBottom: "20px" }}
        >
          <Button
            onClick={() => setSelectedCategory("Coding Languages")}
            sx={{
              backgroundColor:
                selectedCategory === "Coding Languages" ? "#23054d" : "#655e6e",
            }}
          >
            Coding Languages
          </Button>
          <Button
            onClick={() => setSelectedCategory("Diagramming")}
            sx={{
              backgroundColor:
                selectedCategory === "Diagramming" ? "#23054d" : "#655e6e",
            }}
          >
            Diagramming
          </Button>
          <Button
            onClick={() => setSelectedCategory("Miscellaneous")}
            sx={{
              backgroundColor:
                selectedCategory === "Miscellaneous" ? "#23054d" : "#655e6e",
            }}
          >
            Miscellaneous
          </Button>
        </ButtonGroup>
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
            padding: "16px",
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          {/* Display skills based on selected category */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px", // Spacing between chips
              justifyContent: "center",
            }}
          >
            {filteredSkills.map((skill, index) => (
              <Chip
                key={index}
                label={skill.name}
                sx={{
                  backgroundColor: "#6200ea",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#3700b3",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Grid>
      {/* Right Content - Main Section */}
      <Grid item xs={12} md={8}>
        {/* Personal Projects Accordion */}
        <Accordion sx={{ backgroundColor: "#635577", color: "white" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Personal Projects</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Nested Accordion for individual projects */}
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Chrome LMS Sound Bite Extension</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This was a quick ~ 4 hour project to fulfill a request of a
                  friend. This is a very simple chrome extension that adds a
                  listener for a submission button and onClick to play a sound
                  bite. Check out the Chrome Web Store listing here and check it
                  out on GitHub here.
                </Typography>
                <Accordion sx={{ backgroundColor: "#9486A7", color: "white" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>What I Learned</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <h4>
                        I built this project using React and Material UI which I
                        am ~intimately~ familiar with but I am not as familiar
                        with developing Chrome Extensions the touchy
                        specifications it has sometimes.
                      </h4>
                      <ul>
                        <li>
                          My primary issue was that I expected to build
                          different cases for each LMS but realized that doing
                          so was both unreasonable and did not really work. (I
                          tried to use mutation detectors for Google Classroom
                          and just an onClick listener for D2L (god forbid I
                          write more than 2 functions smh))
                        </li>
                        <li>
                          I was testing using D2L and Google Classroom and using
                          different cases would cause context and initialization
                          errors making it "flip flop" by working on one site
                          but not the other.
                        </li>
                        <li>
                          This was quickly resolved by doing the simplest option
                          (that I should have started with) and just looking for
                          a button with a submission related text on select few
                          websites and using an onClick listener. (Submit, Post,
                          Reply, etc.) This let me add compatibility that I
                          couldn't personally test until I shared it with a few
                          peers who tested it on their LMS for me.
                        </li>
                      </ul>
                    </>{" "}
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        {/* Education Accordion */}
        <Accordion sx={{ backgroundColor: "#635577", color: "white" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Computer Science AS Degree from Mohawk Valley Community
                  College
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ textAlign: "left" }}>
                <ul>
                  <li>Phi Theta Kappa Honor Society Member</li>
                  <li>
                    Held positions as a student assistant for the Information
                    Technology and the Athletics department throughout the
                    duration of my time at the institution.
                  </li>
                  <li>
                    Secured a competitive internship in web development during
                    my freshman year and returned for a second session after
                    completing my Associates degree.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Computer Science BS from SUNY Polytechnic Institute
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ textAlign: "left" }}>
                <ul>
                  <li>
                    Maintained a competitive internship during the Fall 2024
                    semester.
                  </li>
                  <li>Projected to graduate a semester ahead.</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        {/* Work Experience Accordion */}
        <Accordion sx={{ backgroundColor: "#635577", color: "white" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Work Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Information Technology Student Assistant
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  {" "}
                  My obligations primarily included repairs and reimaging of
                  college provided devices for students and aiding with larger
                  scale installation of software, updates, and operating system
                  imaging. I gained a number of technical skills and and aided
                  with a number of projects that I found to be beneficial in
                  widening my scope of technical understanding.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Athletics Front Desk/Building Operations Student Assistant
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  {" "}
                  My work primarily consisted of aiding incoming students and
                  patrons with the use of the facility. This included greeting
                  and aiding individuals with signing in, checking out
                  equipment, facility use, and answering phone calls. I was also
                  responsible for aiding with miscellaneous tasks as they were
                  assigned to me.
                </Typography>
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Web Development Internship </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  {" "}
                  I worked with an AFRL mentor to develop a web application for
                  the management of user permissions in an existing software
                  ecosystem. The work completed included wireframing the
                  application using FIGMA and using MERN software technologies
                  to develop the application. This project was brought to
                  completion and deployed for use by the administrators of the
                  software ecosystem.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Web Development Internship </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>
                  I worked with an AFRL mentor to implement an additional
                  feature set for an existing GenAI web client. This included
                  wireframing the features using FIGMA and implementation which
                  primarily using MERN software technologies. These features
                  were brought to completion and deployed for use by the user
                  base of the application.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default PortfolioPage;
