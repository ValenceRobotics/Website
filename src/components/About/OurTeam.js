import Team1 from '../../assets/team 1.png';
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { IconContext } from "react-icons";

function OurTeam() {
    return (
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-4">
            <div className="m-auto px-4">
                <h3 className="text-2xl text-center font-bold text-light-orange">Our Team</h3>
                <p className="text-center max-w-md mx-auto mt-3">Our team began as a group of chemistry students working late one night in the library, when one student, our captain, started formulating an ambitious idea. After much time spent deliberating on the thought, we concurred: We wanted to start a FIRST® Robotics Competition team, completely founded and driven by students. The beginnings were rough, many hours consumed by reaching through doors, many of which lead to even harder paths or even dead ends. However, with our growing group of devoted students, we have preserved and developed into the team it is today.</p>
            </div>

            <div className="m-auto px-4">
                <img src={Team1} alt="team1" />
                <div className="text-center mt-4">
                    <IconContext.Provider value={{ className: "text-3xl text-dark-orange" }}>
                        <a href="https://github.com/ValenceRobotics" target="_blank" rel="noopener noreferrer">
                            <GoMarkGithub className="inline" />
                        </a>
                        <a href="https://www.instagram.com/valence_robotics/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineInstagram className="inline" />
                        </a>
                        <a href="https://www.paypal.com/paypalme/valencerobotics" target="_blank" rel="noopener noreferrer">
                            <BsPaypal className="inline" />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;