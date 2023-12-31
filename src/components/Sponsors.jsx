/* eslint-disable react/jsx-no-target-blank */
import sponsor1 from '/assets/one.jpg';
import sponsor2 from '/assets/two.jpg';
import sponsor3 from '/assets/three.jpg';
import sponsor4 from '/assets/four.jpg';
// import sponsor4 from '/assets/4.jpg';
// import sponsor5 from '/assets/5.jpg';
// import sponsor6 from '/assets/6.jpg';

const sponsorLogos = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    // sponsor4,
    // sponsor5,
    // sponsor6,
  ];
const Sponsors = () => {
    return (
        <section className="bg-gray-100 py-10 flex flex-col items-center justify-center" id='sponsors'>
        <h2 className="mb-4 text-4xl md:text-7xl font-black text-secondary">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-3">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="shadow flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-16 rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-y-5 items-center justify-center mt-6'>
            <h3 className='text-center text-lg'>For enquiries and sponsorship, call or send us a message on WhatsApp 07062380867 <br />or <br />Email - Ibadanfujifest@gmail.com </h3>
            <a href="https://wa.link/akus0p" target="_blank">
              <button className='bg-primary border border-primary bg-inherit text-white text-[1rem] font-medium rounded-lg px-7 py-3 hover:bg-primary hover:text-white ease-linear duration-200'>Become a Sponsor</button>
            </a>
        </div>
      </section>
    )
}

export default Sponsors
