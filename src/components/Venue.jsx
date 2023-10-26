
const Venue = () => {
    return (
        <section className='bg-gradient-to-l from-[#DD8145] from-70% to-[#A93837] rounded-md'>
            <div className='md:mx-auto md:container text-white flex flex-col gap-y-16 items-center text-center py-6 w-full'>
                <div className="leading-[50px]">
                    <h1 className="text-[30px] md:text-[50px] font-bold">Venue:</h1>
                    <p className="capitalize leading-8 md:text-[30px] font-bold">the international conference center, agbowo, ibadan.</p>
                </div>
                <div className="leading-[50px]">
                    <h1 className="text-[30px] md:text-[50px] font-bold">Date:</h1>
                    <p className="capitalize leading-8 md:text-[30px] font-bold">saturday, september 9th, 2023.</p>
                </div>
            </div>
        </section>
    )
}

export default Venue
