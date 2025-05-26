
import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import CarCard from '../components/CarCard';
import { carInventory } from '../data/carInventory';

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(carInventory.map(car => car.category)))];
  const brands = ['All', ...Array.from(new Set(carInventory.map(car => car.brand)))];

  const filteredAndSortedCars = useMemo(() => {
    let filtered = carInventory.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;
      const matchesAvailability = !showAvailableOnly || car.available;
      
      return matchesSearch && matchesCategory && matchesBrand && matchesAvailability;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default: // name
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, sortBy, showAvailableOnly]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setShowAvailableOnly(false);
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || selectedBrand !== 'All' || showAvailableOnly;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Inventory
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete collection of luxury and exotic vehicles. 
            Find the perfect car for your next adventure.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-900 border-b border-yellow-400/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Top Bar - Search and Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
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

            {/* Results and Filter Toggle */}
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                {filteredAndSortedCars.length} {filteredAndSortedCars.length === 1 ? 'vehicle' : 'vehicles'}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-black border border-yellow-400/20 rounded-lg px-4 py-2 text-white hover:border-yellow-400/40 transition-colors sm:hidden"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Filters Row */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ${showFilters || 'hidden sm:grid'}`}>
            {/* Category */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-black border border-yellow-400/20 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-black border border-yellow-400/20 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none text-sm"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-black border border-yellow-400/20 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none text-sm"
              >
                <option value="name">Name</option>
                <option value="year">Newest First</option>
                <option value="brand">Brand</option>
              </select>
            </div>

            {/* Available Only */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Availability</label>
              <label className="flex items-center space-x-2 py-2">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  className="rounded border-yellow-400/20 bg-black text-yellow-400 focus:ring-yellow-400 focus:ring-offset-0"
                />
                <span className="text-white text-sm">Available only</span>
              </label>
            </div>

            {/* Clear Filters */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider invisible">Clear</label>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full bg-red-600/20 border border-red-400/30 text-red-400 rounded-lg px-3 py-2 text-sm hover:bg-red-600/30 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No vehicles found</h3>
            <p className="text-gray-400 text-lg mb-8">
              Try adjusting your filters or search terms to find more vehicles.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryPage;
