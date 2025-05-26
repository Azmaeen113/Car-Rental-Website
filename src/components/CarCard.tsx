
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../data/carInventory';
import { Star, ArrowRight, Phone, Mail } from 'lucide-react';

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, featured = false }) => {
  const getImageSrc = (imagePath: string) => {
    // Remove leading slash if present and ensure proper path
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `/${cleanPath}`;
  };

  const handleCallNow = () => {
    window.open('tel:+18184540977', '_self');
  };

  const handleSendMessage = () => {
    const recipient = "Booking@RichRentalsLA.com";
    const subject = encodeURIComponent(`Inquiry about ${car.name}`);
    const body = encodeURIComponent(`Hello, I am interested in the ${car.name} (${car.year}). Please provide more information about availability and pricing.

Best regards,`);

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailURL, '_blank');
  };

  return (
    <div className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Availability Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          car.available
            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
            : 'bg-red-500/20 text-red-400 border border-red-400/30'
        }`}>
          {car.available ? 'Available' : 'Rented'}
        </span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={getImageSrc(car.image)}
          alt={car.name}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            featured ? 'h-64 lg:h-96' : 'h-48 lg:h-56'
          }`}
          loading="lazy"
          style={{ aspectRatio: featured ? '16/9' : '4/3' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/inventory/${car.id}`}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-yellow-500"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`font-bold text-white group-hover:text-yellow-400 transition-colors ${
              featured ? 'text-xl lg:text-2xl' : 'text-lg'
            }`}>
              {car.name}
            </h3>
            <p className="text-gray-400 text-sm">{car.year} • {car.category}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-yellow-400 text-sm font-medium mt-1">Contact for Pricing</p>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-black/40 rounded-lg p-3 border border-yellow-400/10">
            <div className="text-yellow-400 font-medium">Power</div>
            <div className="text-white">{car.specs.horsepower}</div>
          </div>
          <div className="bg-black/40 rounded-lg p-3 border border-yellow-400/10">
            <div className="text-yellow-400 font-medium">0-60</div>
            <div className="text-white">{car.specs.acceleration}</div>
          </div>
        </div>

        {/* Features */}
        {featured && (
          <div className="space-y-2">
            <h4 className="text-white font-medium">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {car.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-md border border-yellow-400/20"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <Link
            to={`/inventory/${car.id}`}
            className="col-span-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-center text-sm"
          >
            Details
          </Link>
          <button
            onClick={handleCallNow}
            className="col-span-1 px-3 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
            title="Call Now"
          >
            <Phone className="w-4 h-4" />
          </button>
          <button
            onClick={handleSendMessage}
            className="col-span-1 px-3 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
            title="Send Message"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default CarCard;
