function Interested(props) {
    return (
        <div className="container mx-auto max-w-5xl px-4">
            <div className="flex justify-evenly">
                <h1 className="text-4xl font-bold text-center text-light-orange">Interested <span className="text-black">in</span> Sponsoring?</h1>
            </div>
            <div className="mt-8">

                <div>
                    <div className="flex justify-center mb-4">
                        <div className="bg-light-orange rounded-full w-8 h-8 flex justify-center items-center mr-2">
                            <h1 className="text-2xl md:text-3xl font-bold text-center text-white">1</h1>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-center text-black align-middle">Fill out the <a href="https://c1h0s3jjlx4.typeform.com/to/efpc56TR" target="_blank" className="text-light-orange underline hover:text-dark-orange" rel="noreferrer">sponsor information form</a></h2>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-light-orange rounded-full w-8 h-8 flex justify-center items-center mr-2">
                            <h1 className="text-2xl md:text-3xl font-bold text-center text-white">2</h1>
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-center text-black align-middle">Wait for an email from us!</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interested;