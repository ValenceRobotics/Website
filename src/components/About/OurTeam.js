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
                <p className="text-center max-w-md mx-auto mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.</p>
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