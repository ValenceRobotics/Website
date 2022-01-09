import { Navbar } from "./NavBar";
import Banner from "./Banner";
import Landing from "./Sponsor/Landing"
import Button from "./About/Button";
import Branding from '../assets/Branding Document.pdf'
import SponsorshipPacket from '../assets/Sponsor Packet.pdf'
import SponsorProspectus from '../assets/21-22 Valence Robotics Prospectus.pdf'


function Resources() {
    return (
        <>
            <head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <Navbar active="resources" />
            <Banner />
            <div className="mt-10 ">
                <Landing
                    blackText="Our "
                    orangeText="Resources"
                    desc="Branding, Marketing, and more"
                />

                <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Important <span className="text-black">Links</span></h1>
                <div className="text-center mt-10">
                    <Button
                        text="Recruitment Flyer"
                        to="https://drive.google.com/file/d/1TYVliDqq0FMK3smyTm_OdNbufVAErv9c/view?usp=sharing"
                    />
                    <div className="my-4 md:inline md:mx-3"></div>
                    <Button
                        text="Branding Document"
                        to="https://docs.google.com/document/d/1Fc0RgRXL9f0TvXlq7sW3yHkdeqg2uJ7H_sZClSpjRcs/edit?usp=sharing"
                    />
                    <div className="my-4 md:inline md:mx-3"></div>
                    <Button
                        text="Sponsor Packet"
                        to="https://docs.google.com/document/d/1SUuSq2FaKFuLpAshwy7bJuyLd-E8XxW0zukyqIxsPWM/edit?usp=sharing"
                    />
                    <div className="my-4 md:inline md:mx-3"></div>
                    <Button
                        text="Sponsor Prospectus"
                        to="https://docs.google.com/document/d/1d3A2Ku_GVVgfd2HPE7kV2fmR1c9gbt2rTsEbtXR_F70/edit?usp=sharing"
                    />
                </div>

                <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Branding <span className="text-black">Document</span></h1>

                <object className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  " data={Branding} type="application/pdf" aria-label="Branding Document" />

                <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Sponsor <span className="text-black">Packet</span></h1>

                <object className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  " data={SponsorshipPacket} type="application/pdf" aria-label="Sponsorship Packet" />

                <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Sponsor <span className="text-black">Prospectus</span></h1>
                <object className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  " data={SponsorProspectus} type="application/pdf" aria-label="Sponsorship Prospectus" />
            </div>
        </>
    );
}

export default Resources;