function Interested(props) {
    return (
        <div className="container mx-auto max-w-5xl px-4">
            <div className="flex justify-evenly">
                <h1 className="text-4xl font-bold text-center text-light-orange">Interested <span className="text-black">in</span> Joining?</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-y-8 mt-8">


                <div className="flex justify-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div>
                    <div className="flex justify-center mb-4">
                        <div className="bg-light-orange rounded-full w-8 h-8 flex justify-center items-center mr-2">
                            <h1 className="text-2xl md:text-3xl font-bold text-center text-white">1</h1>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-center text-black align-middle">Fill out the <a href="https://c1h0s3jjlx4.typeform.com/to/efpc56TR" className="text-light-orange underline hover:text-dark-orange">member information form</a></h2>
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