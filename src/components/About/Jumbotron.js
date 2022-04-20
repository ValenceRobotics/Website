import logo from '../../assets/logo_dark.png';
import Button from "./Button.js";

function Jumbotron() {
    return (
        <div className="grid md:grid-cols-2 gap-y-8">
            <div className="flex justify-center">
                <img src={logo} alt="Logo" className="max-h-56 m-auto" />
            </div>

            <div className="flex justify-center">
                <div className="m-auto text-center">
                    <h1 className="lg:text-7xl text-5xl font-bold text-center"><span className="text-logo-orange font-heading">About</span> Us</h1>

                    <p className="text-center text-lg text-slate-200 italic mt-8 font-para">Valence Robotics FRC Team 8429</p>

                    <div className="mt-8">
                        <Button className="" text="Join Us" to="https://docs.google.com/forms/d/e/1FAIpQLScqY1hIwYAXldG9aOpobT0Uxm4xXzQeZVyaQUJAkupFeL6QHw/viewform?usp=sf_link" dark={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
