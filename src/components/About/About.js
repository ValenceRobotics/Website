import InterestedInJoining from "./InterestedInJoining";
import Jumbotron from "./Jumbotron";
import MeetTheTeam from "./MeetTheTeam";
import OurTeam from "./OurTeam";
import WhatIsFirst from "./WhatIsFirst";
import { Navbar } from "../NavBar";
import Banner from "../Banner";

function About() {
  return (
    <>
      <head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Navbar active="about" />
      <Banner />
      <div className="mt-10">
        <div className="container mx-auto">
          <Jumbotron />
          <div className="mt-20" />
          <WhatIsFirst heading="What is FIRST?">FIRST® (For Inspiration and Recognition of Science and Technology) is a non-profit organization dedicated to advancing STEM education in the next generation of students. FIRST® Robotics Competition is one of the programs– alongside FIRST® LEGO® Lego League, FIRST® Tech Challenge, and others– aimed specifically at high school students.
            Find out more <a href="https://www.firstinspires.org/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-900">here</a></WhatIsFirst>
          <div className="mt-20" />
          <OurTeam />
          <div className="mt-20" />
          <InterestedInJoining />
          {/* <MeetTheTeam /> */}
        </div>
      </div>
    </>
  );
}

export default About;