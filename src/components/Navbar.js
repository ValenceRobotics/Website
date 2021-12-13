import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex items-center gap-8 p-8 pr-16 pt-6">
            <img className="h-20 w-20" src={Logo}/>
            <div className="text-4xl font-bold text-dark-orange flex -ml-8">Valence <p className="text-black ml-2">Robotics</p></div>
            <div className="grow" />
            <Link to="/" className="text-2xl font-normal text-grey-text hover:text-black">Home</Link>
            <Link to="about" className="text-2xl font-normal text-grey-text hover:text-black">About Us</Link>
            <Link to="sponsors" className="text-2xl font-normal text-grey-text hover:text-black">Sponsors</Link>
            <Link to="contact" className="text-2xl font-normal text-grey-text hover:text-black">Contact</Link>
        </div>
    );
}

export default Navbar;
