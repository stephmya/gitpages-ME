import React from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Link,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const PortfolioPage = () => {
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
          {/* Social Icons */}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/stephanie-myalik-8306582a2/"
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link href="https://github.com/stephmya" target="_blank">
              <GitHubIcon fontSize="large" />
            </Link>
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
            <Accordion sx={{ backgroundColor: "#796D8A", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Project 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Description of Project 2</Typography>
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
