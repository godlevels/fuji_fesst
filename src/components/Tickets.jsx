import TicketCards from "./TicketCards"


const Tickets = () => {
    return (
        <>
            <section className="flex flex-col items-center bg-inherit p-4">
                <div className="mb-2 mt-12 text-center">
                    <h1 className="mb-4 text-7xl font-black text-secondary">Pricing</h1>
                    <p className="text-lg text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam magnam obcaecati id doloribus veritatis aliquam.</p>
                </div>

                <div className="flex flex-col gap-5 p-10 md:flex-row">
                    <TicketCards color="#ffffff" name="Basic" price="2K" desc="Get started with the basic plan" features={["A seat",]} btn="Register" />
                    <TicketCards color="#ffffff" name="Standard" price="20K" desc="Get started with the basic plan" features={["Good view seats", "1 fuji fest aso ebi", "complimentary drinks",]} btn="Register" />
                    <TicketCards color="#ffffff" name="VIP Table" price="200K" desc="Get started with the basic plan" features={["4 premium seats", "complimentary drinks", "4 fujifest aso ebi",]} btn="Register" />
                    <TicketCards color="#ffffff" name="VVIP Table" price="500K" desc="Get started with the basic plan" features={["7 Premium seats", "Premium drinks + chops", "7 fuji fleet Aso ebi & souvenirs", "Pictures with fuji musicians and celebrities"]} btn="Register" />
                </div>
            </section>
        </>
    )
}

export default Tickets
