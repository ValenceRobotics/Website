import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="text-3xl font-bold underline">
        Home.
        <br/ >
        <Link to="about" className="text-2xl underline text-blue-400 hover:text-blue-700">About</Link>
      </div>
    );
}
  
export default Home;
