import Button from "./About/Button.js";
import TeamPhoto from "../assets/team3.png"

function Home() {
    return (
        <div className="w-screen">
            <div className="container mx-auto grid grid-cols-2">
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
        </div >
    );
}

export default Home;
