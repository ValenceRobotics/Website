import TeamMember from "./TeamMember";
import Team from "../../assets/team.json";

function MeetTheTeam() {
    const TeamMembers = Team.members.map(member => <TeamMember photo={member.photo} name={member.name} position={member.position} bio={member.bio} />);

    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl font-bold text-center text-light-orange">Meet <span className="text-black">The</span> Team</h1>
            </div> 
            <div className="flex justify-evenly flex-wrap gap-x-8 gap-y-8 mt-8">
                {TeamMembers}
            </div>
        </div>
    );
}

export default MeetTheTeam;
