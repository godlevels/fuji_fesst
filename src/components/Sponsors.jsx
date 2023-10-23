import sponsor1 from '../assets/1.jpg';
import sponsor2 from '../assets/2.jpg';
import sponsor3 from '../assets/3.jpg';
import sponsor4 from '../assets/4.jpg';
import sponsor5 from '../assets/5.jpg';
import sponsor6 from '../assets/6.jpg';

const sponsorLogos = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
  ];
const Sponsors = () => {
    return (
        <section className="bg-gray-100 py-10 flex flex-col items-center justify-center">
        <h2 className="mb-4 text-4xl md:text-7xl font-black text-secondary">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
      </section>
    )
}

export default Sponsors
