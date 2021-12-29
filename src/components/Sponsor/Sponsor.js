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
                <WhatIsFirst heading="Why Us?">As a highschool student established and powered team, we are always looking for support in whatever means it may come.
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