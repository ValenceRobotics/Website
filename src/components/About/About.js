import InterestedInJoining from "./InterestedInJoining";
import Jumbotron from "./Jumbotron";
import MeetTheTeam from "./MeetTheTeam";
import OurTeam from "./OurTeam";
import WhatIsFirst from "./WhatIsFirst";

function About() {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <Jumbotron />
        <div className="mt-20" />
        <OurTeam />
        <div className="mt-20" />
        <WhatIsFirst heading="What is FIRST?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem." />
        <div className="mt-20" />
        <InterestedInJoining />
        <div className="mt-28" />
        <MeetTheTeam />
      </div>
    </div>
  );
}

export default About;