import Button from "./About/Button.js";
import TeamPhoto from "../assets/team3.png"

function Home() {
    return (
        <div className="w-screen">
            <div className="mx-auto flex flex-wrap justify-evenly gap-y-16">
                <div className="flex justify-center">
                    <div className="m-auto text-center">
                        <h1 className="text-7xl font-bold text-center"><span className="text-light-orange">Valence</span> Robotics</h1>

                        <p className="text-center text-lg text-gray-500 italic mt-8 px-12">Transforming the students of today into the leaders of tomorrow</p>

                        <div className="mt-8 flex justify-center gap-6">
                            <Button className="" text="Join Us" to="JOIN US LINK" dark={true} />
                            <Button className="" text="Sponsor Us" to="sponsor" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={TeamPhoto} alt="Logo" className="max-h-80 m-auto" />
                </div>
            </div>

            <div className="flex justify-evenly flex-wrap gap-x-4 gap-y-16 mt-24">
                <div className="container md:w-2/5 px-8 xl:px-16">
                    <h3 className="text-2xl text-center font-normal">Our Mission</h3>
                    <p className="text-center max-w-md mx-auto mt-3">Valence Robotics aims to <span className="font-bold">uplift</span> our diverse student community through opportunities to develop into motivated leaders of <span className="font-bold">science, technology, engineering, art,</span> and <span className="font-bold">math.</span></p>
                </div>

                <div className="container md:w-2/5 px-8 xl:px-16">
                    <h3 className="text-2xl text-center font-normal">Who are we?</h3>
                    <p className="text-center max-w-md mx-auto mt-3">Valence Robotics (FRC Team 8864) is a 501(c)(3) <span className="font-bold">nonprofit organization</span> started by a group of dedicated students from North Carolina's School of Science and Mathematics (<span className="font-bold">NCSSM</span>). Our team seeks to guide members to become <span className="font-bold">uplift</span><span className="font-bold">well-rounded</span> industry <span className="font-bold">profesionals.</span></p>
                </div>
            </div>
        </div >
    );
}

export default Home;
