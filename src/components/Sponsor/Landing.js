import Button from "../About/Button.js";

function Landing() {
    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-center">
                <div className="m-auto text-center">
                    <h1 className="lg:text-7xl text-5xl  font-bold text-center">Sponsor <span className="text-light-orange">Valence</span> Robotics</h1>

                    <p className="text-center text-lg text-gray-500 italic mt-8">Valence Robotics (FRC Team 8864)</p>

                    <div className="mt-8">
                        <Button className="" text="Sponsorship Form" to="https://c1h0s3jjlx4.typeform.com/to/efpc56TR" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
