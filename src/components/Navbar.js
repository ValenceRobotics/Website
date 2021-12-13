import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

// TODO: Make responsive

function Navbar() {
    return (
        <div className="flex flex-wrap items-center gap-y-2 md:gap-y-8 p-4 md:p-8 pr-8 md:pr-16 pt-6 pb-16">
            <img className="h-20 w-20" src={Logo} alt="logo" />
            <div className="text-4xl font-bold text-dark-orange flex md:-ml-8">Valence <p className="text-black ml-2">Robotics</p></div>
            <div className="grow" />
            
            <div className="flex gap-4 md:gap-8">
                <Link to="/" className="text-xl md:text-2xl font-normal text-grey-text hover:text-black">Home</Link>
                <Link to="about" className="text-xl md:text-2xl font-normal text-grey-text hover:text-black">About Us</Link>
                <Link to="sponsors" className="text-xl md:text-2xl font-normal text-grey-text hover:text-black">Sponsors</Link>
                <Link to="contact" className="text-xl md:text-2xl font-normal text-grey-text hover:text-black">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
