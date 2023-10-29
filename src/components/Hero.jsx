const heroImage = new URL('../assets/img.png', import.meta.url).href
import Nav from './Nav'
// import heroImage from "/src/assets/img.png"
import Hero_txt from "../assets/ibd.png"

const Hero = () => {
    return (
        <section> 
          <Nav />

          <div className='relative'>
            <img src={heroImage} alt="" className='h-[60vh] md:h-screen w-full object-cover' />

            <div className='absolute inset-0 flex flex-col justify-center items-center mt-[5rem] md:mt-[3rem]'>
              <img src={Hero_txt} alt="" className='w-[10rem] md:w-[25rem] md:mb-[-3rem]'/>
              <div>
                <span className='text-white text-[3rem] md:text-[8rem] capitalize'>fuji festival</span>

                <div className='flex gap-x-5 justify-center items-center mt-5'>
                  <button className='bg-inherit border border-primary text-white text-[1rem] font-medium rounded-lg px-7 py-3 hover:bg-primary hover:text-black ease-linear duration-200'>Get Ticket</button>
                  <a href="https://wa.link/akus0p" target="_blank" rel='noreferrer'>
                    <button className='bg-primary border border-primary bg-inherit text-black text-[1rem] font-medium rounded-lg px-7 py-3 hover:bg-inherit hover:text-white ease-linear duration-200'>Sponsor</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Hero
