import Button from "./About/Button.js";
import TeamPhoto from "../assets/team3.png"
import HoneyNest from "../assets/honeynest_realty.png"
import ThreeOaks from "../assets/three_oaks.jpg"
import { Navbar } from "./NavBar";
import Banner from "./Banner";
import SponsorCard from './Sponsor/SponsorCard.js'

function Home() {
    const unScaleDimensions = [1920, 1080];
    const scaleFactor = 3;
    const scaleDimensions = [unScaleDimensions[0] / scaleFactor, unScaleDimensions[1] / scaleFactor];
    return (
        <>
            <Navbar active="home" />
            <Banner />
            <div className="w-screen mt-10" >
                <div className="mx-auto flex flex-wrap justify-evenly gap-y-16">
                    <div className="flex justify-center">
                        <div className="m-auto text-center">
                            <h1 className="text-7xl font-bold text-center font-name"><span className="text-light-orange">Valence</span> Robotics</h1>

                            <p className="text-center text-lg text-slate-200 italic mt-8 px-12 font-para">Transforming the students of today into the leaders of tomorrow</p>

                            <div className="mt-8 flex justify-center gap-6">
                                <Button className="" text="Join Us" to="https://docs.google.com/forms/d/e/1FAIpQLScqY1hIwYAXldG9aOpobT0Uxm4xXzQeZVyaQUJAkupFeL6QHw/viewform" dark={true} />
                                <Button className="" text="Sponsor Us" to="sponsor" dark={true} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* <img src={TeamPhoto} alt="our team" className="w-4/5 m-auto" /> */}
                        <iframe src="https://drive.google.com/file/d/1bCwoRxqKAMQDp30Bm3WXuNDk5fno9ZJC/preview" width={scaleDimensions[0]} height={scaleDimensions[1]} allow="autoplay"></iframe>
                    </div>
                </div>

                <div className="flex justify-evenly flex-wrap gap-x-4 gap-y-16 mt-24">
                    <div className="container md:w-2/5 px-4 md:px-16">
                        <h3 className="text-2xl text-center font-normal font-heading">Our Mission</h3>
                        <p className="text-center max-w-md mx-auto mt-3 font-para">The mission of Valence Robotics is to uplift our diverse student community through opportunities to develop into motivated leaders of science, technology, engineering, art, and math. Created for and initiated by students, our team seeks to guide members to become well-rounded industry professionals.</p>
                    </div>

                    <div className="container md:w-2/5 px-4 xl:px-16">
                        <h3 className="text-2xl text-center font-normal font-heading">Who are we?</h3>
                        <p className="text-center max-w-md mx-auto mt-3 font-para">Valence Robotics is a FIRST® Robotics Competition team and 501(c)3 organization. Our team was established in October 2021 with the mission of furthering connectivity and curiosity within the community. While we operate primarily in Durham, North Carolina, our members come from counties all across the state.</p>
                    </div>
                </div>

                <div className="container mx-auto mt-24 px-4">
                    <h1 className="text-4xl font-bold text-center text-dark-orange my-4 font-heading"><span className="text-black dark:text-slate-200">Current</span> Sponsors</h1>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <SponsorCard companyName="HoneyNest Realty" desc="We are on a mission to find your sweet nest and grow your “nest” worth." img={HoneyNest} tier="Neon Tier Sponsor" />

                        <SponsorCard companyName="Three Oaks Engineering" desc="Three Oaks Engineering is a woman-owned business focused on helping our clients accomplish infrastructure projects with careful consideration of community and environmental needs." img={ThreeOaks} tier="Krypton Tier Sponsor" href="https://threeoaksengineering.com/" />
                    </div>

                </div>


            </div >
        </>
    );
}

export default Home;
