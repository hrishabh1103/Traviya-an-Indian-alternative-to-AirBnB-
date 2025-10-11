import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../data/mockData';
import { formatCurrency } from '../utils/helpers';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="group block card-3d">
      <div className="bg-white rounded-2xl overflow-hidden shadow-3d shadow-3d-hover">
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
              {property.locationCity}, {property.locationState}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-1 line-clamp-1">{property.title}</p>
          <p className="text-gray-500 text-sm mb-2">{property.propertyType}</p>

          <div className="flex items-baseline space-x-1">
            <span className="text-base font-semibold text-gray-900">
              {formatCurrency(property.pricePerNight)}
            </span>
            <span className="text-sm text-gray-600">night</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
