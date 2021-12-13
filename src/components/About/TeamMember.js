function TeamMember(props) {
    return (
        <div className="drop-shadow-lg flex flex-col justify-items-center text-center rounded-lg w-4/5 md:w-2/5 lg:w-1/4 bg-white p-4 items-center">
            <img className="rounded-full w-32 h-32 mb-4" src={process.env.PUBLIC_URL + props.photo} alt={"Photo of " + props.name} />

            <p className="font-bold text-base text-black mb-1">{props.name}</p>
            <p className="font-bold text-base text-light-orange mb-4">{props.position}</p>

            <p className="font-normal text-base text-black">{props.bio}</p>
        </div>
    );
}

export default TeamMember;
