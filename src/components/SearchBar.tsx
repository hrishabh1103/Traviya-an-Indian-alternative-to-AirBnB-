import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SearchBar: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests > 0) params.append('guests', guests.toString());

    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-full shadow-md border border-gray-300 flex items-center max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-200">
      <div className="flex-1 px-6 py-3 border-r border-gray-300">
        <label className="block text-xs font-semibold text-gray-800 mb-1">Where</label>
        <input
          type="text"
          placeholder="Search destinations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
        />
      </div>

      <div className="flex-1 px-6 py-3 border-r border-gray-300">
        <label className="block text-xs font-semibold text-gray-800 mb-1">Check in</label>
        <input
          type="text"
          placeholder="Add dates"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          onFocus={(e) => e.target.type = 'date'}
          onBlur={(e) => !e.target.value && (e.target.type = 'text')}
          className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
        />
      </div>

      <div className="flex-1 px-6 py-3 border-r border-gray-300">
        <label className="block text-xs font-semibold text-gray-800 mb-1">Check out</label>
        <input
          type="text"
          placeholder="Add dates"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          onFocus={(e) => e.target.type = 'date'}
          onBlur={(e) => !e.target.value && (e.target.type = 'text')}
          className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
        />
      </div>

      <div className="flex-1 px-6 py-3 flex items-center justify-between">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-800 mb-1">Who</label>
          <input
            type="number"
            min="1"
            placeholder="Add guests"
            value={guests || ''}
            onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
            className="w-full text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-rose-500 hover:bg-rose-600 text-white rounded-full p-3 ml-2 transition-colors duration-200"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
