import Button from "../About/Button.js";

function Landing({ blackText, orangeText, desc, buttonLink, buttonText }) {
    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-center">
                <div className="m-auto text-center">
                    <h1 className="lg:text-7xl text-5xl  font-bold text-center font-heading">{blackText} <span className="text-light-orange">{orangeText}</span></h1>

                    <p className="text-center text-lg text-gray-500 italic mt-8 font-para">{desc}</p>

                    <div className="mt-8">
                        <Button text={buttonText} to={buttonLink} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
