
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { carInventory } from '../data/carInventory';
import { ArrowLeft, Shield, Star, Phone, Mail, CheckCircle, Clock, MapPin } from 'lucide-react';

const CarDetailPage = () => {
  const { carId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Scroll to top when component mounts or carId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carId]);

  const car = carInventory.find(c => c.id === parseInt(carId || '0'));

  if (!car) {
    return <Navigate to="/inventory" replace />;
  }

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const getImageSrc = (imagePath: string) => {
    // Remove leading slash if present and ensure proper path
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `/${cleanPath}`;
  };

  const getValidGalleryImages = () => {
    return car.gallery.filter((_, index) => !imageErrors.has(index));
  };

  const getCurrentImageSrc = () => {
    const validImages = getValidGalleryImages();
    if (validImages.length === 0) {
      return getImageSrc(car.image);
    }
    const currentImage = validImages[selectedImage] || validImages[0];
    return getImageSrc(currentImage);
  };

  const handleCallNow = () => {
    window.open('tel:+18184540977', '_self');
  };

  const handleSendMessage = () => {
    const recipient = "Booking@RichRentalsLA.com";
    const subject = encodeURIComponent(`Inquiry about ${car.name}`);
    const body = encodeURIComponent(`Hello,

I am interested in the ${car.name} (${car.year}).

Vehicle Details:
- Model: ${car.name}
- Year: ${car.year}
- Category: ${car.category}

Please provide me with:
- Rental pricing information
- Availability for my desired dates
- Any special requirements or terms
- Insurance coverage details

I look forward to hearing from you.

Best regards,`);

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailURL, '_blank');
  };

  const relatedCars = carInventory
    .filter(c => c.id !== car.id && (c.brand === car.brand || c.category === car.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Back Button */}
      <div className="bg-gray-900 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/inventory"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Inventory</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <img
                src={getCurrentImageSrc()}
                alt={car.name}
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="eager"
                onError={() => {
                  console.warn(`Failed to load image: ${getCurrentImageSrc()}`);
                }}
              />
              {/* Availability Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  car.available
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : 'bg-red-500/20 text-red-400 border border-red-400/30'
                }`}>
                  {car.available ? 'Available Now' : 'Currently Rented'}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {car.gallery.map((image, index) => (
                !imageErrors.has(index) && (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-yellow-400' : ''
                    }`}
                  >
                    <img
                      src={getImageSrc(image)}
                      alt={`${car.name} view ${index + 1}`}
                      className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                    />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 text-yellow-400 text-sm mb-2">
                <span>{car.year}</span>
                <span>•</span>
                <span>{car.category}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{car.name}</h1>
              <div className="text-2xl font-bold text-yellow-400">Contact for Exclusive Pricing</div>
            </div>

            {/* Specifications */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(car.specs).map(([key, value]) => (
                  <div key={key} className="bg-black/40 rounded-lg p-3">
                    <div className="text-yellow-400 text-sm font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-white font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Get Pricing & Availability</h3>
              <p className="text-gray-300 mb-4">
                Contact us directly for exclusive pricing, availability, and custom rental packages tailored to your needs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCallNow}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={handleSendMessage}
                  className="flex items-center justify-center space-x-2 border-2 border-yellow-400 text-yellow-400 px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Ready to Experience This Vehicle?</h2>
              <p className="text-black/80 text-lg mb-6">
                Contact our luxury rental specialists today. We'll provide personalized pricing,
                check availability for your dates, and ensure your {car.name} experience exceeds expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-black">
                  <Shield className="w-5 h-5" />
                  <span>Fully insured and maintained</span>
                </div>
                <div className="flex items-center space-x-3 text-black">
                  <Clock className="w-5 h-5" />
                  <span>24/7 roadside assistance</span>
                </div>
                <div className="flex items-center space-x-3 text-black">
                  <MapPin className="w-5 h-5" />
                  <span>Delivery available in LA area</span>
                </div>
              </div>
            </div>

            <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>
              <div className="space-y-3 mb-6">
                <div className="text-black">
                  <strong>Phone:</strong> (818) 454-0977
                </div>
                <div className="text-black">
                  <strong>Email:</strong> contact@richrentalsla.com
                </div>
                <div className="text-black">
                  <strong>Location:</strong> 8549 Wilshire Blvd, Beverly Hills CA 90211
                </div>
                <div className="text-black">
                  <strong>Hours:</strong> 10AM-7PM, 7 Days/Week
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCallNow}
                  className="flex items-center justify-center space-x-2 bg-black text-yellow-400 px-4 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={handleSendMessage}
                  className="flex items-center justify-center space-x-2 border-2 border-black text-black px-4 py-3 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              You Might Also{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Like
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <Link
                  key={relatedCar.id}
                  to={`/inventory/${relatedCar.id}`}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getImageSrc(relatedCar.image)}
                      alt={relatedCar.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {relatedCar.name}
                    </h3>
                    <div className="text-yellow-400 font-semibold">Contact for Pricing</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetailPage;
