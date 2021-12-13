
import { Link } from "react-router-dom"
function Button(props) {

    if (!props.dark) return (
        <Link to={props.to}>
            <button class="rounded-full bg-light-orange py-2 px-10 text-white drop-shadow-lg hover:bg-dark-orange font-bold text-lg">{props.text}</button>
        </Link>

    ); else {
        return (
            <Link to={props.to}>
                <button class="rounded-full bg-dark-orange py-2 px-10 text-white drop-shadow-lg hover:bg-dark-orange font-bold text-lg">{props.text}</button>
            </Link>
    
        );
    }
    
}

export default Button;
