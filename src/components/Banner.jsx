import { useState, useEffect } from "react";

const Banner = () => {
 
  const slides = [
    {
      id: 1,
      img: "/assets/Banner(photo)/domino-studio-164_6wVEHfI-unsplash.jpg",
      title: "Nike Men Running Shoes",
      desc: "Performance and design. Taken right to the edge.",
    },
    {
      id: 2,
      img: "/assets/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg",
      title: "Classic Sunglasses",
      desc: "Protect your eyes with style and comfort.",
    },
    {
      id: 3,
      img: "assets/shivi-WRo-r8iO1Xc-unsplash.jpg",
      title: "Luxury Jewelry Collection",
      desc: "Shine bright with our premium jewelry pieces.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //  Auto slide 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full max-w-7xl mx-auto mt-1 rounded-lg overflow-hidden">
      {/*  Desktop with  (Single Image) */}
      <div className="hidden md:block">
        <img
          src="assets/Banner(photo)/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecomme.jpg"
          alt="Desktop Banner"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/*  Mobile  (Slider ) */}
      <div className="block md:hidden relative ">
        {/* Slide Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex flex-col items-center justify-center bg-white p-4"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-48 object-cover rounded-md shadow "
              />
              <h2 className="text-base font-semibold text-gray-800 mt-3 text-center">
                {slide.title}
              </h2>
              <p className="text-sm text-gray-600 text-center">{slide.desc}</p>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 my-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === idx
                  ? "bg-indigo-600 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
