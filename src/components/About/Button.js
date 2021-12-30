
import { Link } from "@chakra-ui/react"
function Button(props) {

    if (!props.dark) return (
        <Link href={props.to} isExternal>
            <button className="rounded-full bg-light-orange py-2 px-10 text-white drop-shadow-lg hover:bg-dark-orange font-bold duration-300 text-lg font-para">{props.text}</button>
        </Link>

    ); else {
        return (
            <Link href={props.to} isExternal>
                <button className="rounded-full bg-dark-orange py-2 px-10 text-white drop-shadow-lg hover:bg-darker-orange duration-300 font-bold text-lg font-para">{props.text}</button>
            </Link>

        );
    }

}

export default Button;
