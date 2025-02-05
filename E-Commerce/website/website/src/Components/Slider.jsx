import { useEffect, useState } from "react";
import axios from "axios";

function Slider() {
  const [sliders, setSliders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch sliders from the server
  const fetchSliders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/slider/slider");
      setSliders(response.data.sliders);
    } catch (error) {
      console.error("Failed to fetch sliders", error);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  // Smooth infinite loop for sliders
  useEffect(() => {
    if (sliders.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
        setIsAnimating(false);
      }, 700); // Match transition duration
    }, 4000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [sliders]);

  if (!sliders.length) {
    return <div className="text-center text-gray-500">Loading sliders...</div>;
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-in-out ${isAnimating ? "" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className="min-w-full h-[600px] flex-shrink-0 relative"
          >
            <img
              src={`http://localhost:3000/uploads/${slider.sliderImage}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliders.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;