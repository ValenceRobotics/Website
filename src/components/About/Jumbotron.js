import logo from '../../assets/logo.png';
import Button from "./Button.js";

function Jumbotron() {
    return (
        <div className="grid grid-cols-2">
            <div className="flex justify-center">
                <img src={logo} alt="Logo" className="max-h-56 m-auto" />
            </div>

            <div className="flex justify-center">
                <div className="m-auto text-center">
                    <h1 className="text-7xl font-bold text-center"><span className="text-light-orange">About</span> Us</h1>

                    <p className="text-center text-lg text-gray-500 italic mt-8">Valence Robotics (FRC Team 8864)</p>

                    <div className="mt-8">
                        <Button className="" text="Join Us" to="JOIN US LINK" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
