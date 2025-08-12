import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import evelynImg from "../assets/clients/evelyn.jpg";
import tafadzwaImg from "../assets/clients/tafadzwa.jpg";
import lovemoreImg from "../assets/clients/lovemore.jpg";

const testimonials = [
  {
    name: "Evelyn shava",
    feedback: "TwineCapital transformed our business with their expert advice!",
    image: evelynImg,
    rating: 5,
  },
  {
    name: "Tafadzwa Chibasa",
    feedback: "Professional, responsive, and highly knowledgeable.",
    image: tafadzwaImg,
    rating: 4,
  },
  {
    name: "Lovemore Mvere",
    feedback: "Highly recommend for any company looking to grow smartly.",
    image: lovemoreImg,
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded shadow-md text-center mx-4"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 shadow"
              />
              <p className="italic text-gray-700 dark:text-gray-300">"{client.feedback}"</p>
              <div className="text-yellow-400 my-2 text-lg">
                {"★".repeat(client.rating)}
                <span className="text-gray-400">{'★'.repeat(5 - client.rating)}</span>
              </div>
              <p className="font-semibold text-gray-900 dark:text-white">- {client.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
