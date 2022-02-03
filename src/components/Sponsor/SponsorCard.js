export default function SponsorCard({ img, companyName, desc, tier, href }) {

    return (
        <a href={href} target="_blank">
            <div className="p-8 border-2 max-w-sm mx-auto bg-white drop-shadow-md rounded-md text-center max-w-24">
                <img src={img} alt="honeynest" className="mx-auto h-48" />
                <h3 className="font-bold text-2xl text-light-orange mt-2 font-heading">{companyName}</h3>
                <p className="text-center text-lg text-gray-500 italic mt-2 font-bold px-12 font-para">{tier}</p>
                <p className="text-lg mt-2 font-para">{desc}</p>
            </div>
        </a>
    )
}