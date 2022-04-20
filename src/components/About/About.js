import InterestedInJoining from "./InterestedInJoining";
import Jumbotron from "./Jumbotron";
import MeetTheTeam from "./MeetTheTeam";
import OurTeam from "./OurTeam";
import WhatIsFirst from "./WhatIsFirst";
import { Navbar } from "../NavBar";
import Banner from "../Banner";
import { SimpleGrid } from '@chakra-ui/react'
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { IconContext } from "react-icons";

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
          <WhatIsFirst heading="What is FIRST?">FIRST® (For Inspiration and Recognition of Science and Technology) is a non-profit organization dedicated to advancing STEM education in the next generation of students. FIRST® Robotics Competition is one of the programs– alongside FIRST® LEGO® League, FIRST® Tech Challenge, and others– aimed specifically at high school students.
            Find out more <a href="https://www.firstinspires.org/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-900">here</a></WhatIsFirst>
          <div className="mt-20" />
          <OurTeam />
          <div className="mt-20" />
          <InterestedInJoining />
          {/* <MeetTheTeam /> */}

          <SimpleGrid columns={{ base: 1, md: 2 }} mt="20" mx="auto" spacing="10">
            <div className="mx-auto" alignSelf="center">
              <h1 className="text-4xl font-bold text-light-orange font-heading">Contact <span className="text-black dark:text-slate-200">Us</span></h1>
              <p className="italic mt-1">Feel free to reach out!</p>

              <p className=" mt-3 text-xl font-para"><span className="font-bold">Phone: </span>(919) 886-4388</p>
              <p className="  text-xl font-para"><span className="font-bold">Email: </span>leadership@valencerobotics.org</p>
              <p className="  text-xl font-para"><span className="font-bold">Location: </span>Durham, NC</p>

              <div className="mt-4">
                {/* <IconContext.Provider value={{ className: "text-3xl text-dark-orange" }}>
                  <a href="https://github.com/ValenceRobotics" target="_blank" rel="noopener noreferrer">
                    <GoMarkGithub className="inline" />
                  </a>
                  <a href="https://www.instagram.com/valence_robotics/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram className="inline" />
                  </a>
                  <a href="https://www.paypal.com/paypalme/valencerobotics" target="_blank" rel="noopener noreferrer">
                    <BsPaypal className="inline" />
                  </a>
                </IconContext.Provider> */}

                <IconContext.Provider value={{ className: "text-3xl text-light-orange" }}>
                  <a href="https://github.com/ValenceRobotics" target="_blank" rel="noopener noreferrer">
                    <div className="mt-3">
                      <GoMarkGithub className="inline" />
                      <p className="inline text-lg font-semibold"> ValenceRobotics</p>
                    </div>
                  </a>
                  <div />
                  <a href="https://www.instagram.com/valence_robotics/" target="_blank" rel="noopener noreferrer">
                    <div className="mt-3">
                      <AiOutlineInstagram className="inline " />
                      <p className="inline text-lg font-semibold"> @valence_robotics</p>
                    </div>
                  </a>
                  <div />
                  <a href="https://www.paypal.com/paypalme/valencerobotics" target="_blank" rel="noopener noreferrer">
                    <div className="mt-3">
                      <BsPaypal className="inline" />
                      <p className="inline text-lg font-semibold"> @valencerobotics</p>
                    </div>
                  </a>
                </IconContext.Provider>
              </div>
            </div>

            <iframe title="asdf" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Durham,%20NC%2027705+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">bike gps</a></iframe>


          </SimpleGrid>
        </div>
      </div>
    </>
  );
}

export default About;