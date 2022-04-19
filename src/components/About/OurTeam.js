import Team from '../../assets/team_picture.jpg';


function OurTeam() {
    return (
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-4">
            <div className="m-auto px-4">
                <h3 className="text-2xl text-center font-bold text-light-orange font-heading">Our Team</h3>
                <p className="text-center max-w-md mx-auto mt-3 font-para">Our team began as a group of chemistry students working late one night in the library, when one student, our captain, started formulating an ambitious idea. After much time spent deliberating on the thought, we concurred: We wanted to start a FIRST® Robotics Competition team, completely founded and driven by students. The beginnings were rough, many hours consumed by reaching through doors, many of which lead to even harder paths or even dead ends. However, with our growing group of devoted students, we have preserved and developed into the team it is today.</p>
            </div>

            <div className="m-auto px-4">
                <img src={Team} alt="team1" className="rounded-lg" />

            </div>
        </div>
    );
}

export default OurTeam;