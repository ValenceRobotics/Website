import Landing from "./Landing"
import WhatIsFirst from "../About/WhatIsFirst";
import Interested from "./Interested";
import Tier from "./Tier";
import { Navbar } from "../NavBar";
import Banner from "../Banner";

function Sponsor() {
    return (
        <>
            <Navbar active="sponsor" />
            <Banner />
            <div className="mt-10">
                <Landing />
                <div className="mt-20" />
                <WhatIsFirst heading="Why Us?">The mission of Valence Robotics is to uplift our diverse student community through opportunities to develop into motivated leaders of science, technology, engineering, art, and math. Created for and initiated by students, our FIRST Robotics Competition team seeks to guide members to become well-rounded industry professionals.
                </WhatIsFirst>
                <div className="mt-20" />
                <Interested />
                <div className="mt-20" />
                <h1 className="text-4xl font-bold text-center text-light-orange">Sponsorship <span className="text-black">Tiers</span></h1>
                <Tier />


            </div>
        </>
    );
}

export default Sponsor;