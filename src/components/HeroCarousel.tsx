import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Phone, Mail } from 'lucide-react';
import { Car } from '../data/carInventory';

interface HeroCarouselProps {
  featuredCars: Car[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ featuredCars }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Mapping for hero section specific WebP images
  const heroImageMapping: { [key: string]: string } = {
    "McLaren 750S": "compressed webp car images/Mclaren 750S.webp",
    "Porsche GT3 RS": "compressed webp car images/Porscge GT3 RS.webp",
    "Ferrari Purosangue": "compressed webp car images/Ferrari Purosangue.webp",
    "Rolls-Royce Spectre": "compressed webp car images/Rolls Royce Spectre.webp",
    "Lamborghini Urus Performante": "compressed webp car images/Lamborchini URUS PERF.webp",
    "Lamborghini Urus": "compressed webp car images/Lamborghini urus.webp",
    "Rolls-Royce Cullinan Series 2": "compressed webp car images/ROLLS ROYCE CULLINAN SERIES 2.webp"
  };

  const getHeroImageSrc = (carName: string, fallbackImage: string) => {
    // Use hero section image if available, otherwise fallback to regular image
    const heroImage = heroImageMapping[carName];
    if (heroImage) {
      return `/${heroImage}`;
    }
    // Fallback to regular image path
    const cleanPath = fallbackImage.startsWith('/') ? fallbackImage.slice(1) : fallbackImage;
    return `/${cleanPath}`;
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, featuredCars.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
  };

  const currentCar = featuredCars[currentSlide];

  const handleCallNow = () => {
    window.open('tel:+18184540977', '_self');
  };

  const handleSendMessage = () => {
    const recipient = "Booking@RichRentalsLA.com";
    const subject = encodeURIComponent(`Inquiry about ${currentCar.name}`);
    const body = encodeURIComponent(`Hello, I am interested in the ${currentCar.name} (${currentCar.year}). Please provide more information about availability and pricing.

Best regards,`);

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailURL, '_blank');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {featuredCars.map((car, index) => (
          <div
            key={car.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={getHeroImageSrc(car.name, car.image)}
              alt={car.name}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm font-medium text-yellow-400 uppercase tracking-wider">
                  Featured Vehicle
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Luxury
                  </span>
                  <br />
                  Redefined
                </h1>
                <p className="text-lg sm:text-xl text-gray-300">Dreams Delivered</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">{currentCar.name}</h3>

                {/* Desktop specs - hidden on mobile */}
                <div className="hidden sm:flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">HP:</span>
                    <span>{currentCar.specs.horsepower}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">0-60:</span>
                    <span>{currentCar.specs.acceleration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">Top Speed:</span>
                    <span>{currentCar.specs.topSpeed}</span>
                  </div>
                </div>

                {/* Desktop description - hidden on mobile */}
                <p className="hidden sm:block text-gray-300 leading-relaxed">
                  Experience the ultimate in luxury and performance.
                  This exceptional vehicle combines cutting-edge technology
                  with unparalleled craftsmanship. Contact us for exclusive pricing.
                </p>
              </div>

              {/* Mobile: Single CTA button */}
              <div className="sm:hidden">
                <button
                  onClick={handleCallNow}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
              </div>

              {/* Desktop: Multiple CTA buttons */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCallNow}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={handleSendMessage}
                  className="inline-flex items-center justify-center space-x-2 border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Contact Card - Hidden on mobile */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-3xl" />
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-6 border border-yellow-400/20">
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-bold text-white">{currentCar.name}</h4>
                  <div className="text-xl font-bold text-yellow-400">Contact for Pricing</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-yellow-400 font-medium">Engine</div>
                      <div className="text-white">{currentCar.specs.engine}</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-yellow-400 font-medium">Transmission</div>
                      <div className="text-white">{currentCar.specs.transmission}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <div className="flex space-x-2">
            {featuredCars.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeroCarousel;
