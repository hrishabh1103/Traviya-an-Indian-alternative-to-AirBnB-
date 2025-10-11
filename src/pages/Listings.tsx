import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { mockProperties, propertyTypes, indianStates } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';

export const Listings: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    propertyType: searchParams.get('type') || '',
    state: searchParams.get('state') || '',
    location: searchParams.get('location') || '',
  });

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      if (filters.minPrice && property.pricePerNight < filters.minPrice) return false;
      if (filters.maxPrice && property.pricePerNight > filters.maxPrice) return false;
      if (filters.propertyType && property.propertyType !== filters.propertyType) return false;
      if (filters.state && property.locationState !== filters.state) return false;
      if (filters.location) {
        const searchLower = filters.location.toLowerCase();
        const matchesCity = property.locationCity.toLowerCase().includes(searchLower);
        const matchesState = property.locationState.toLowerCase().includes(searchLower);
        if (!matchesCity && !matchesState) return false;
      }
      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 10000,
      propertyType: '',
      state: '',
      location: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">
              {filteredProperties.length} stays
            </p>
            <h1 className="text-3xl font-semibold text-gray-900">
              Stays nearby
            </h1>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 border border-gray-300 px-5 py-3 rounded-xl hover:border-gray-400 transition-all duration-200"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="font-medium text-sm">Filters</span>
          </button>
        </div>

        {showFilters && (
          <div className="bg-white rounded-2xl shadow-3d p-6 mb-8 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Min Price (₹)
                </label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Max Price (₹)
                </label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) || 10000 })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="10000"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  Property Type
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2">
                  State
                </label>
                <select
                  value={filters.state}
                  onChange={(e) => setFilters({ ...filters, state: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                >
                  <option value="">All States</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={clearFilters}
                className="text-gray-900 hover:text-gray-600 font-semibold underline text-sm"
              >
                Clear all
              </button>
            </div>
          </div>
        )}

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">No stays match your search</p>
            <button
              onClick={clearFilters}
              className="text-gray-900 hover:text-gray-600 font-semibold underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
