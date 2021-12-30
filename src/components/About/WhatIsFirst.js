function WhatIsFirst(props) {
    return (
        <div className="text-center px-4">
            <h3 className="text-2xl text-center font-bold text-light-orange font-heading">{props.heading}</h3>
            <p className="max-w-5xl mx-auto mt-3 font-para">{props.children}</p>
        </div>
    )
}

export default WhatIsFirst;