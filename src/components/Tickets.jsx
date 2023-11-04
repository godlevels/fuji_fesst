import { Link } from "react-router-dom"
import TicketCards from "./TicketCards"


const Tickets = () => {
    return (
        <>
            <section className="flex flex-col items-center bg-inherit p-4" id="tickets">
                <div className="mb-2 text-center">
                    <h1 className="mb-4 text-4xl md:text-7xl font-black text-secondary">Tickets</h1>
                    <p className="text-lg text-secondary md:w-[50rem]">Buy a ticket or table to gain entry and enjoy the event. A ticket or table also gives you a chance to participate in our raffle draw where you will win home appliances like TV, Phones, Laptops, Blender, Clipper, Powerbanks etc</p>
                </div>

                <div className="flex flex-col gap-5 p-10 md:flex-row">
                    <Link to="https://paystack.com/pay/ibff1">
                        <TicketCards color="#ffffff" name="Basic" price="2K" desc="Get started with the basic plan" features={["A seat",]} btn="Get Ticket" />
                    </Link>
                    <Link to="https://paystack.com/pay/Ibff2">
                        <TicketCards color="#ffffff" name="Standard" price="20K" desc="Get started with the basic plan" features={["Good view seats", "1 fuji fest aso ebi", "complimentary drinks",]} btn="Get Ticket" />
                    </Link>
                    <Link to="https://paystack.com/pay/ibff3">
                        <TicketCards color="#ffffff" name="VIP Table" price="200K" desc="Get started with the basic plan" features={["4 premium seats", "complimentary drinks", "4 fujifest aso ebi",]} btn="Buy Table" />
                    </Link>
                    <Link to="https://paystack.com/pay/ibff4">
                        <TicketCards color="#ffffff" name="VVIP Table" price="500K" desc="Get started with the basic plan" features={["7 Premium seats", "Premium drinks + chops", "7 fuji fleet Aso ebi & souvenirs", "Pictures with fuji musicians and celebrities"]} btn="Buy Table" />
                    </Link>
                </div> 
            </section>
        </>
    )
}

export default Tickets
