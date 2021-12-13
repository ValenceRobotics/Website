import Logo from "../assets/biglogo.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-footer mt-24 pt-16 pb-8 px-4 md:px-16">
            <div className="flex flex-wrap justify-evenly gap-y-12 gap-x-6">
                <img className="w-24 h-24 lg:w-32 lg:h-32 justify-self-center" src={Logo} alt="Valence Robotics Logo" />
                
                <div className="flex flex-wrap justify-evenly gap-x-6 md:gap-x-24">
                    <div>
                        <h1 className="font-bold text-xl mb-2">Navigate</h1>
                        
                        <Link to="/" className="text-base font-normal text-gray-800 hover:text-black">Home</Link><br/>
                        <Link to="about" className="text-base font-normal text-gray-800 hover:text-black">About Us</Link><br/>
                        <Link to="MEET THE TEAM??" className="text-base font-normal text-gray-800 hover:text-black">Meet the Team</Link><br/>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl mb-2">Get Involved</h1>
                        
                        <Link to="join" className="text-base font-normal text-gray-800 hover:text-black">Join the Team</Link><br/>
                        <Link to="mentor" className="text-base font-normal text-gray-800 hover:text-black">Become a Mentor</Link><br/>
                        <Link to="sponsor" className="text-base font-normal text-gray-800 hover:text-black">Sponsor Us</Link><br/>
                    </div>
                </div>
                
                <div>
                    <h1 className="font-bold text-xl mb-2">Join our Newsletter!</h1>
                    <input className="text-base md:text-lg placeholder:text:grey-text rounded-l-lg px-3 py-1" placeholder="Email"/>
                    <button className="rounded-r-lg text-base md:text-lg bg-dark-orange text-white font-bold hover:bg-darker-orange py-1 px-5">Join</button>
                </div>
            </div>

            <div className="mt-16 mx-16 lg:mx-32 h-1 bg-grey-text opacity-20" />
            <p className="mt-4 text-center text-grey-text opacity-70">&copy; 2021 Valence Robotics | All Rights Reserved</p>
        </div>
    );
}

export default Footer;
