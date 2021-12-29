function InterestedInJoining() {
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl font-bold text-center text-light-orange">Interested <span className="text-black">in</span> Joining?</h1>
            </div>
            <div className="flex justify-center mt-8 items-center gap-x-4 gap-y-4 flex-wrap">
                <div className="bg-light-orange rounded-full w-14 h-14 flex justify-center items-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white ">1</h1>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-black align-middle">Fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLScqY1hIwYAXldG9aOpobT0Uxm4xXzQeZVyaQUJAkupFeL6QHw/viewform?usp=sf_link" className="text-light-orange underline hover:text-dark-orange" target="_blank" rel="noreferrer">member information form</a></h2>
            </div>
        </div>
    );
}

export default InterestedInJoining;
