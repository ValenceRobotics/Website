import { Navbar } from "./NavBar";
import Banner from "./Banner";
import Landing from "./Sponsor/Landing"
import Button from "./About/Button";


function Resources() {
    return (
        <>
            <head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <Navbar active="resources" />
            <Banner />
            <div className="mt-10 ">
                <Landing
                    blackText="Our "
                    orangeText="Resources"
                    desc="Branding, Marketing, and more"
                    buttonLink="https://docs.google.com/document/d/1Fc0RgRXL9f0TvXlq7sW3yHkdeqg2uJ7H_sZClSpjRcs/edit?usp=sharing"
                    buttonText="Branding Document"
                />

                <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Important <span className="text-black">Links</span></h1>
                <div className="text-center mt-10">
                    <Button
                        text="Recruitment Flyer"
                        to="https://drive.google.com/file/d/1TYVliDqq0FMK3smyTm_OdNbufVAErv9c/view?usp=sharing"
                    />
                    <div className="my-4 md:inline md:mx-3"></div>
                    <Button
                        text="Branding Document"
                        to="https://docs.google.com/document/d/1Fc0RgRXL9f0TvXlq7sW3yHkdeqg2uJ7H_sZClSpjRcs/edit?usp=sharing"
                    />
                </div>

                <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Branding <span className="text-black">Document</span></h1>

                <iframe title="Branding Doc" src="https://docs.google.com/document/d/e/2PACX-1vQuEnZwbREs6vQt_-5z98d4ArxxMnNyktX6Y1PuoNu0zWYGPPbK8Q3CMyJIrZihzOSpsg_6VTMTrdF3/pub?embedded=true" className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  border-4 border-slate-400 "></iframe>


            </div>
        </>
    );
}

export default Resources;