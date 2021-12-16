import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IconContext } from 'react-icons';

function Bullet(props) {
    return (
        <div className="">
            <IconContext.Provider value={{ className: "text-light-orange text-3xl" }}>
                <IoIosCheckmarkCircleOutline className="inline mr-2 sponsor-icons" />
            </IconContext.Provider>
            <p className="inline text-xl">{props.text}</p>
        </div>
    )
}

export default Bullet;