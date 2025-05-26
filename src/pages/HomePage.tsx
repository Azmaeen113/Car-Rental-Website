import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CarCard from '../components/CarCard';
import { carInventory } from '../data/carInventory';
import { ArrowRight, Shield, Clock, Star, Trophy, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Show specific cars in featured collection
  const featuredCars = carInventory.filter(car =>
    car.name === "McLaren 750S" ||
    car.name === "Porsche GT3 RS" ||
    car.name === "Ferrari Purosangue" ||
    car.name === "Rolls-Royce Spectre" ||
    car.name === "Ferrari SF90 Stradale" ||
    car.name === "Lamborghini Urus Performante" ||
    car.name === "Lamborghini Urus" ||
    car.name === "Rolls-Royce Cullinan Series 2"
  );

  // If any of the cars are not found, log them
  const requestedCars = [
    "McLaren 750S",
    "Porsche GT3 RS",
    "Ferrari Purosangue",
    "Rolls-Royce Spectre",
    "Ferrari SF90 Stradale",
    "Lamborghini Urus Performante",
    "Lamborghini Urus",
    "Rolls-Royce Cullinan Series 2"
  ];

  const foundCars = featuredCars.map(car => car.name);
  const missingCars = requestedCars.filter(car => !foundCars.includes(car));

  if (missingCars.length > 0) {
    console.log('Missing cars:', missingCars);
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Carousel */}
      <HeroCarousel featuredCars={featuredCars} />

      {/* Featured Cars Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Featured
              </span>{' '}
              Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our handpicked selection of the world's most exclusive and powerful vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} featured={index === 0} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/inventory"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Full Inventory</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Rich Rentals LA
              </span>
            </h2>
            <p className="text-xl text-gray-300">Excellence in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Premium Fleet',
                description: 'World\'s latest high-end & exotic vehicles',
              },
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Comprehensive coverage for your peace of mind',
              },
              {
                icon: Clock,
                title: '24/7 Service',
                description: 'Round-the-clock support for your convenience',
              },
              {
                icon: Star,
                title: 'VIP Treatment',
                description: 'Personalized service that exceeds expectations',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Don't just drive, make a statement. Contact us today for pricing and availability
            to experience the thrill that only comes with true automotive excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18184540977"
              className="inline-flex items-center justify-center space-x-2 bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
