import Logo from "../assets/logo_black.png"
import { Link } from 'react-router-dom';
import { Link as CharkaLink } from "@chakra-ui/react"

function Footer() {
    const subscribeEmail = async event => {
        alert("Our Newsletter is not setup yet. But please check back soon!")
        // let email = document.getElementById('email').value
        // // eslint-disable-next-line no-control-regex
        // let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

        // if (email === "") {
        //     alert("Please enter an email address")
        //     return;
        // }
        // else if (!emailRegex.test(email)) {
        //     alert("Please enter a valid email address")
        //     return;
        // }

        // console.log(`Subscribing ${email} to newsletter...`)

        // const response = await fetch(`https://api.mailerlite.com/api/v1/subscribers/MAILERLITE_ID?` + new URLSearchParams({
        //     apiKey: process.env.MAILERLITE_KEY,
        //     id: "MAILERLITE_ID",
        //     email: email
        // }), {
        //     body: JSON.stringify({
        //         email: email
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     method: 'POST'
        // }
        // )

        // let result = await response.json()
        // document.getElementById('formResponse').innerText = "Thanks for subscribing!"
        // document.getElementById('email').remove()
        // document.getElementById('signup').remove()
        // console.log(result)
    }

    return (
        <div className="bg-footer mt-24 pt-16 pb-8 px-4 md:px-16 dark:bg-light-orange text-slate-900">
            <div className="flex flex-wrap justify-evenly gap-y-12 gap-x-6">
                <img className="w-24 h-24 lg:w-32 lg:h-32 justify-self-center" src={Logo} alt="Valence Robotics Logo" />

                <div className="flex flex-wrap justify-evenly gap-x-6 md:gap-x-24">
                    <div>
                        <h1 className="font-bold text-xl mb-2 font-heading">Navigate</h1>

                        <Link to="/" className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para">Home</Link><br />
                        <Link to="about" className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para">About Us</Link><br />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl mb-2 font-heading">Get Involved</h1>

                        <CharkaLink className="text-base font-para font-normal text-gray-800 hover:text-black hover:underline" href="https://docs.google.com/forms/d/e/1FAIpQLScqY1hIwYAXldG9aOpobT0Uxm4xXzQeZVyaQUJAkupFeL6QHw/viewform" isExternal>Join the Team</CharkaLink><br />
                        <CharkaLink className="text-base font-para font-normal text-gray-800 hover:text-black hover:underline" href="https://forms.gle/i9BU9c8wo8tTrRmQ7" isExternal>Become a Mentor</CharkaLink><br />
                        <Link to="sponsor" className="text-base font-para font-normal text-gray-800 hover:text-black hover:underline">Sponsor Us</Link><br />
                    </div>
                </div>

                <div id="formResponse">
                    <h1 className="font-bold text-xl mb-2 font-heading">Join our Newsletter!</h1>
                    <input className="text-base md:text-lg placeholder:text:grey-text rounded-l-lg px-3 py-1 font-para" id="email" placeholder="Email" />
                    <button className="rounded-r-lg font-para text-base md:text-lg bg-dark-orange text-white font-bold duration-300 hover:bg-darker-orange py-1 px-5 dark:bg-button-dark-orange dark:hover:bg-darkest-orange" id="signup" onClick={subscribeEmail}>Join</button>
                </div>
            </div>

            <div className="mt-16 mx-16 lg:mx-32 h-1 bg-slate-900 opacity-40" />
            <p className="mt-4 text-center text-grey-text opacity-87 font-para dark:text-slate-900">&copy; 2021 Valence Robotics | All Rights Reserved</p>
        </div>
    );
}

export default Footer;
