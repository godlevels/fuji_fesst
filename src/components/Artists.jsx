/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { hero_one, hero_two } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick} 
      className="absolute top-[50%] left-0 text-secondary cursor-pointer"
    >
      <MdKeyboardArrowLeft size={50} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-0 z-10 text-primary cursor-pointer"
    >
      <MdKeyboardArrowRight size={50} />
    </div>
  );
}

const Artists = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section>
        <div className="mb-2 mt-12 text-center">
          <h1 className="mb-4 text-4xl md:text-7xl font-black text-secondary">Artists</h1>
          <p className="text-lg text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            magnam obcaecati id doloribus veritatis aliquam.
          </p>
        </div>
        <div className="w-full h-auto md:h-[120vh] flex md:justify-between">
          <div className="w-full h-[36.5rem] md:w-1/2 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 mt-16">
            {hero_two.map((item) => (
              <div key={item.id} className="box relative">
                <img
                  src={item.image}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
                <div className="text absolute top-0 left-0 text-white p-5">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-gray-400">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-full md:w-1/2">
            <Slider {...settings}>
              {hero_one.map((item) => (
                <div
                  key={item.id}
                  className="box relative h-[92vh] sm:mt-16 w-full"
                >
                  <img
                    src={item.cover}
                    alt="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="text absolute top-0 left-0 text-white p-5">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-gray-400">{item.tag}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Artists;