import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, Home as HomeIcon, Filter, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredDestinations, propertyTypes } from '../data/mockData';
import { supabase, Destination } from '../lib/supabase';
import DestinationCard from '../components/DestinationCard';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
  });
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayCount, setDisplayCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  useEffect(() => {
    filterDestinations();
  }, [destinations, selectedRegion, selectedCategory]);

  const fetchDestinations = async () => {
    try {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .order('name');

      if (error) throw error;
      setDestinations(data || []);
      setFilteredDestinations(data || []);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterDestinations = () => {
    let filtered = destinations;

    if (selectedRegion !== 'All') {
      filtered = filtered.filter((dest) => dest.region === selectedRegion);
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((dest) =>
        dest.category_tags.includes(selectedCategory.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  };

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central'];
  const categories = [
    'All',
    'beach',
    'hill station',
    'mountains',
    'spiritual',
    'cultural',
    'heritage',
    'adventure',
    'wildlife',
    'desert',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchData.location) params.append('location', searchData.location);
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
              Not sure where to go? Perfect.
            </h1>
          </div>

          <form onSubmit={handleSearch} className="glass-effect rounded-full shadow-3d p-2 max-w-4xl border border-gray-200/50">
            <div className="flex flex-col md:flex-row md:items-center md:divide-x divide-gray-300">
              <div className="flex-1 px-6 py-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Where
                </label>
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="flex-1 px-6 py-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Check in
                </label>
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-700"
                />
              </div>

              <div className="flex-1 px-6 py-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Check out
                </label>
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-700"
                />
              </div>

              <div className="flex-1 px-6 py-3">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Who
                </label>
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({ ...searchData, guests: parseInt(e.target.value) })}
                  className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-700"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="px-2 py-2">
                <button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Inspiration for your next trip</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.name}
              onClick={() => navigate(`/listings?location=${destination.name}`)}
              className="cursor-pointer group card-3d"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-3d shadow-3d-hover">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/90">{destination.propertyCount} stays</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Live anywhere</h2>
        <p className="text-gray-600 mb-8">Discover stays to live, work, or just relax</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {propertyTypes.map((type) => (
            <div
              key={type}
              onClick={() => navigate(`/listings?type=${type}`)}
              className="cursor-pointer group card-3d"
            >
              <div className="bg-white rounded-xl p-4 text-center shadow-3d shadow-3d-hover border border-gray-100">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {type === 'Haveli' && '🏰'}
                  {type === 'Beach Hut' && '🏖️'}
                  {type === 'Treehouse' && '🌲'}
                  {type === 'Heritage Home' && '🏛️'}
                  {type === 'Houseboat' && '⛵'}
                  {type === 'Homestay' && '🏡'}
                  {type === 'Villa' && '🏝️'}
                  {type === 'Mud House' && '🛖'}
                </div>
                <h3 className="text-sm font-medium text-gray-800">{type}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Explore Popular Destinations Across India
            </h2>
            <p className="text-gray-600">Discover {destinations.length}+ stunning places from the Himalayas to the oceans</p>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <div>
            <div className="flex items-center mb-3">
              <Filter className="w-5 h-5 text-gray-700 mr-2" />
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Filter by Region</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedRegion === region
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <Filter className="w-5 h-5 text-gray-700 mr-2" />
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-96"></div>
            ))}
          </div>
        ) : filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found for the selected filters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDestinations.slice(0, displayCount).map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  description={destination.description}
                  state={destination.state}
                  region={destination.region}
                  imageUrl={destination.image_url}
                  categoryTags={destination.category_tags}
                />
              ))}
            </div>

            {displayCount < filteredDestinations.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setDisplayCount(displayCount + 8)}
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                >
                  View More Destinations
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl overflow-hidden shadow-3d">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-12">
                <div className="flex items-center mb-4">
                  <HomeIcon className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/90 font-medium">Traviya your home</span>
                </div>
                <h2 className="text-4xl font-semibold text-white mb-4">Try hosting</h2>
                <p className="text-lg text-white/90 mb-8">
                  Earn extra income and unlock new opportunities by sharing your space
                </p>
                <button
                  onClick={() => navigate('/become-host')}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold shadow-lg"
                >
                  Learn more
                </button>
              </div>
              <div className="hidden md:block h-full">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hosting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
