import Nav from './Nav'
import Hero_Img from "../../public/images/img.png"
import Hero_txt from "../../public/images/ibd.png"

const Hero = () => {
    return (
        <section> 
          <Nav />

          <div className='relative'>
            <img src={Hero_Img} alt="" className='h-[60vh] md:h-screen w-full object-cover' />

            <div className='absolute inset-0 flex flex-col justify-center items-center mt-[5rem] md:mt-[3rem]'>
              <img src={Hero_txt} alt="" className='w-[10rem] md:w-[25rem] md:mb-[-3rem]'/>
              <div>
                <span className='text-white text-[3rem] md:text-[8rem] capitalize'>fuji festival</span>

                <div className='flex gap-x-5 justify-center items-center mt-5'>
                  <button className='bg-inherit border border-primary text-white text-[1rem] font-medium rounded-lg px-5 py-2 hover:bg-primary hover:text-black ease-linear duration-200'>Get Ticket</button>
                  <button className='bg-primary border border-primary bg-inherit text-black text-[1rem] font-medium rounded-lg px-5 py-2 hover:bg-primary hover:text-white ease-linear duration-200'>Sponsor</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Hero
