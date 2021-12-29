import Button from "./About/Button.js";
import TeamPhoto from "../assets/team3.png"
import HoneyNest from "../assets/honeynest_realty.png"
import { Navbar } from "./NavBar";
import Banner from "./Banner";
import { SimpleGrid } from '@chakra-ui/react'
import SponsorCard from './Sponsor/SponsorCard.js'

function Home() {
    return (
        <>
            <Navbar active="home" />
            <Banner />
            <div className="w-screen mt-10" >
                <div className="mx-auto flex flex-wrap justify-evenly gap-y-16">
                    <div className="flex justify-center">
                        <div className="m-auto text-center">
                            <h1 className="text-7xl font-bold text-center"><span className="text-light-orange">Valence</span> Robotics</h1>

                            <p className="text-center text-lg text-gray-500 italic mt-8 px-12">Transforming the students of today into the leaders of tomorrow</p>

                            <div className="mt-8 flex justify-center gap-6">
                                <Button className="" text="Join Us" to="https://docs.google.com/forms/d/e/1FAIpQLScqY1hIwYAXldG9aOpobT0Uxm4xXzQeZVyaQUJAkupFeL6QHw/viewform" dark={true} />
                                <Button className="" text="Sponsor Us" to="sponsor" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={TeamPhoto} alt="our team" className="w-4/5 m-auto" />
                    </div>
                </div>

                <div className="flex justify-evenly flex-wrap gap-x-4 gap-y-16 mt-24">
                    <div className="container md:w-2/5 px-4 md:px-16">
                        <h3 className="text-2xl text-center font-normal">Our Mission</h3>
                        <p className="text-center max-w-md mx-auto mt-3">The mission of Valence Robotics is to uplift our diverse student community through opportunities to develop into motivated leaders of science, technology, engineering, art, and math. Created for and initiated by students, our team seeks to guide members to become uplift well-rounded industry profesionals.</p>

                        <p className="text-center max-w-md mx-auto mt-3 text-xl italic">(919) 916-8888</p>
                    </div>

                    <div className="container md:w-2/5 px-4 xl:px-16">
                        <h3 className="text-2xl text-center font-normal">Who are we?</h3>
                        <p className="text-center max-w-md mx-auto mt-3">Valence Robotics is a FIRST® Robotics Competition team and 501(c)3 organization. Our team was established in October 2021 with the mission of furthering connectivity and curiosity within the community. While we operate primarily in Durham, North Carolina, our members come from counties all across the state.</p>

                        <p className="text-center max-w-md mx-auto mt-3 text-xl italic">valencerobotics@gmail.com</p>
                    </div>
                </div>

                <div className="container mx-auto mt-24 px-4">
                    <h1 className="text-4xl font-bold text-center text-dark-orange my-4"><span className="text-black">Current</span> Sponsors</h1>


                    <SponsorCard companyName="HoneyNest Realty" desc="We are on a mission to find your sweet nest and grow your “nest” worth." img={HoneyNest} tier="Neon Tier Sponsor" />

                </div>


            </div >
        </>
    );
}

export default Home;
