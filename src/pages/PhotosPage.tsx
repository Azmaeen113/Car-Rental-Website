
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { carInventory } from '../data/carInventory';
import { Search, Filter, X } from 'lucide-react';

const PhotosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');

  const categories = ['All', ...Array.from(new Set(carInventory.map(car => car.category)))];
  const brands = ['All', ...Array.from(new Set(carInventory.map(car => car.brand)))];

  const filteredCars = carInventory.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Photo
            </span>{' '}
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our stunning collection of luxury vehicles through high-quality imagery. 
            Each photo tells a story of excellence and performance.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-900 border-b border-yellow-400/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-yellow-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black border border-yellow-400/20 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div className="flex items-center space-x-2">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-black border border-yellow-400/20 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-gray-400 text-sm">
              {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'} found
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <Link
                key={car.id}
                to={`/inventory/${car.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      car.available
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'bg-red-500/20 text-red-400 border border-red-400/30'
                    }`}>
                      {car.available ? 'Available' : 'Rented'}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mb-2">
                        View Details
                      </div>
                      <div className="text-yellow-400 text-sm">Contact for Pricing</div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors mb-1">
                    {car.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{car.year} • {car.category}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-yellow-400 font-semibold">Contact for Pricing</div>
                    <div className="text-xs text-gray-500">{car.specs.horsepower}</div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 text-lg mb-4">No vehicles found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedBrand('All');
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Found Your Perfect{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Ride?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to book your dream car and make your luxury driving experience a reality.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
