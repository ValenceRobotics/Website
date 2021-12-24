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
                <WhatIsFirst heading="Why Us?" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem." />
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