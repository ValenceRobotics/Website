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
                <Landing
                    blackText="Sponsor "
                    orangeText="Valence Robotics"
                    desc="Valence Robotics FRC Team 8429"
                    buttonLink="https://c1h0s3jjlx4.typeform.com/to/efpc56TR"
                    buttonText="Sponsorship Form"
                />
                <div className="mt-20" />
                <WhatIsFirst heading="Why Us?">As a highschool student established and powered team, we are always looking for support in whatever means it may come.
                </WhatIsFirst>
                <div className="mt-20" />
                <Interested />
                <div className="mt-20" />
                <h1 className="text-4xl font-bold text-center text-light-orange font-heading">Sponsorship <span className="text-black">Tiers</span></h1>
                <Tier />


            </div>
        </>
    );
}

export default Sponsor;