import Logo from "../assets/biglogo.png"
import { Link } from 'react-router-dom';

function Footer() {
    const subscribeEmail = async event => {
        let email = document.getElementById('email').value
        // eslint-disable-next-line no-control-regex
        let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

        if (email === "") {
            alert("Please enter an email address")
            return;
        }
        else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address")
            return;
        }

        console.log(`Subscribing ${email} to newsletter...`)

        const response = await fetch(`https://api.mailerlite.com/api/v1/subscribers/MAILERLITE_ID?` + new URLSearchParams({
            apiKey: process.env.MAILERLITE_KEY,
            id: "MAILERLITE_ID",
            email: email
        }), {
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST'
        }
        )

        let result = await response.json()
        document.getElementById('formResponse').innerText = "Thanks for subscribing!"
        document.getElementById('email').remove()
        document.getElementById('signup').remove()
        console.log(result)
    }

    return (
        <div className="bg-footer mt-24 pt-16 pb-8 px-4 md:px-16">
            <div className="flex flex-wrap justify-evenly gap-y-12 gap-x-6">
                <img className="w-24 h-24 lg:w-32 lg:h-32 justify-self-center" src={Logo} alt="Valence Robotics Logo" />

                <div className="flex flex-wrap justify-evenly gap-x-6 md:gap-x-24">
                    <div>
                        <h1 className="font-bold text-xl mb-2">Navigate</h1>

                        <Link to="/" className="text-base font-normal text-gray-800 hover:text-black">Home</Link><br />
                        <Link to="about" className="text-base font-normal text-gray-800 hover:text-black">About Us</Link><br />
                        <Link to="MEET THE TEAM??" className="text-base font-normal text-gray-800 hover:text-black">Meet the Team</Link><br />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl mb-2">Get Involved</h1>

                        <Link to="join" className="text-base font-normal text-gray-800 hover:text-black">Join the Team</Link><br />
                        <Link to="mentor" className="text-base font-normal text-gray-800 hover:text-black">Become a Mentor</Link><br />
                        <Link to="sponsor" className="text-base font-normal text-gray-800 hover:text-black">Sponsor Us</Link><br />
                    </div>
                </div>

                <div id="formResponse">
                    <h1 className="font-bold text-xl mb-2">Join our Newsletter!</h1>
                    <input className="text-base md:text-lg placeholder:text:grey-text rounded-l-lg px-3 py-1" id="email" placeholder="Email" />
                    <button className="rounded-r-lg text-base md:text-lg bg-dark-orange text-white font-bold hover:bg-darker-orange py-1 px-5" id="signup" onClick={subscribeEmail}>Join</button>
                </div>
            </div>

            <div className="mt-16 mx-16 lg:mx-32 h-1 bg-grey-text opacity-20" />
            <p className="mt-4 text-center text-grey-text opacity-70">&copy; 2021 Valence Robotics | All Rights Reserved</p>
        </div>
    );
}

export default Footer;
