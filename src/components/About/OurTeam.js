import Team1 from '../../assets/team 1.png';

function OurTeam() {
    return (
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-4">
            <div className="m-auto px-4">
                <h3 className="text-2xl text-center font-bold text-light-orange">Our Team</h3>
                <p className="text-center max-w-md mx-auto mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.</p>
            </div>

            <div>
                <img src={Team1} alt="team1" className=" h-auto" />
            </div>
        </div>
    );
}

export default OurTeam;