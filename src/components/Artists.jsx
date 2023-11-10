/* eslint-disable react/prop-types */
import { hero_two } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Artists = () => {
  return (
    <>
      <section className="mx-auto container">
        <div className="mb-2 mt-12 text-center flex flex-col items-center" id="artistes">
          <h1 className="mb-4 text-4xl md:text-7xl font-black text-secondary">Expected Artistes</h1>
          <p className="text-lg text-secondary md:w-[30rem]">
            Here are some of the fuji artistes we are expecting at the event. Be rest assured we have curated an event you will enjoy and remember 🥰😍
          </p>
        </div>
        <div className="w-full h-[90vh] md:h-[50vh] mt-10 md:mt-14">
          <div className="w-full md:h-[36.5rem] grid grid-cols-2 md:grid-cols-6 gap-y-6 gap-x-4 md:gap-y-0 md:gap-x-0">
            {hero_two.map((item) => (
              <div key={item.id} className="box relative">
                <img
                  src={item.cover}
                  alt="cover" 
                  className="md:w-[12rem] md:h-[12rem] object-cover"
                />
                <div className="text absolute bottom-[-.4rem] left-8 md:bottom-[25rem] md:left-10 text-white p-5 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-white">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-secondary text-center font-semibold mt-[-4rem] md:mt-[-6rem] mb-20">And many others...</h2>
      </section>
    </>
  );
};

export default Artists;