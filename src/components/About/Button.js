
import { Link } from "@chakra-ui/react"
function Button(props) {

    if (!props.dark) return (
        <Link href={props.to} isExternal>
            <button className="rounded-full bg-light-orange py-2 px-10 text-white drop-shadow-lg hover:bg-dark-orange font-bold text-lg">{props.text}</button>
        </Link>

    ); else {
        return (
            <Link href={props.to} isExternal>
                <button className="rounded-full bg-dark-orange py-2 px-10 text-white drop-shadow-lg hover:bg-darker-orange font-bold text-lg">{props.text}</button>
            </Link>

        );
    }

}

export default Button;
