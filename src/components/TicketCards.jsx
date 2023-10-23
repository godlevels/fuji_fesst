import { MdCheckCircleOutline } from "react-icons/md"

const TicketCards = ({color, name, price, desc, features, btn,}) => {
    return (
        <div style={{ backgroundColor: color }} className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 shadow-lg">
            <h2 className="mb-5 text-4xl font-medium">{name}</h2>

            <div>
                {price ? (
                    <>
                        <div>{price}</div>
                    </>
                ) : (
                    "Free"
                )}
            </div>

            <p className="mb-5">{desc}</p>

            <ul className="mb-10 flex flex-col gap-y-2">
                {features.map((feat) => (
                    <li className="flex items-center gap-x-4">
                        <MdCheckCircleOutline size={20} />
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>
            <button className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white">{btn}</button>
        </div>
    )
}

export default TicketCards
