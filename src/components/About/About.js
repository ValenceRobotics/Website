import InterestedInJoining from "./InterestedInJoining";
import Jumbotron from "./Jumbotron";
import MeetTheTeam from "./MeetTheTeam";
import OurTeam from "./OurTeam";
import WhatIsFirst from "./WhatIsFirst";

function About() {
  return (
    <div className="">
      <div className="container mx-auto">
        <Jumbotron />
        <div className="mt-20" />
        <OurTeam />
        <div className="mt-20" />
        <WhatIsFirst />
        <div className="mt-20" />
        <InterestedInJoining />
        <div className="mt-28"/>
        <MeetTheTeam />
      </div>
    </div>
  );
}

export default About;