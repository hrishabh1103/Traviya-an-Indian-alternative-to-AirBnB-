export interface Property {
  id: string;
  title: string;
  description: string;
  propertyType: string;
  pricePerNight: number;
  locationState: string;
  locationCity: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  hostName: string;
  hostImage: string;
}
// can u please update the whole app soon
export interface Destination {
  name: string;
  state: string;
  image: string;
  propertyCount: number;
}

export const featuredDestinations: Destination[] = [
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 245
  },
  {
    name: 'Goa',
    state: 'Goa',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 230
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 145
  },
  {
    name: 'Delhi',
    state: 'Delhi',
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 298
  },
  {
    name: 'Bangalore',
    state: 'Karnataka',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 178
  },
  {
    name: 'Kerala',
    state: 'Kerala',
    image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 134
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 89
  },
  {
    name: 'Ladakh',
    state: 'Ladakh',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
    propertyCount: 34
  }
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Heritage Haveli in Pink City',
    description: 'Experience royal Rajasthani hospitality in this beautifully restored 200-year-old haveli. Features traditional architecture with modern amenities, rooftop terrace with city views, and authentic Rajasthani cuisine.',
    propertyType: 'Haveli',
    pricePerNight: 3500,
    locationState: 'Rajasthan',
    locationCity: 'Jaipur',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Traditional Kitchen', 'Rooftop Terrace', 'Parking', 'Traditional Decor'],
    images: [
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.8,
    reviewCount: 47,
    hostName: 'Rajesh Singh',
    hostImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '1a',
    title: 'Royal Palace Suite',
    description: 'Stay in a converted palace suite with stunning architecture and luxurious amenities. Experience the grandeur of Rajasthan.',
    propertyType: 'Palace',
    pricePerNight: 6500,
    locationState: 'Rajasthan',
    locationCity: 'Jaipur',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Palace Tours', 'Royal Dining', 'Spa', 'Butler Service'],
    images: [
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.9,
    reviewCount: 78,
    hostName: 'Maharaja Singh',
    hostImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '1b',
    title: 'Cozy Courtyard House',
    description: 'Traditional Rajasthani house with a beautiful central courtyard. Perfect for families looking to experience local culture.',
    propertyType: 'Homestay',
    pricePerNight: 2800,
    locationState: 'Rajasthan',
    locationCity: 'Jaipur',
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'Traditional Kitchen', 'Courtyard', 'Home-cooked Meals', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.6,
    reviewCount: 34,
    hostName: 'Sunita Rajput',
    hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '1c',
    title: 'Art District Loft',
    description: 'Modern loft in Jaipur\'s art district with contemporary design and easy access to galleries and cafes.',
    propertyType: 'Apartment',
    pricePerNight: 4200,
    locationState: 'Rajasthan',
    locationCity: 'Jaipur',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Air Conditioning', 'Modern Kitchen', 'Workspace', 'Parking', 'Smart TV'],
    images: [
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 56,
    hostName: 'Arjun Mehta',
    hostImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '1d',
    title: 'Desert Camp Experience',
    description: 'Luxury desert camp near Jaipur with camel rides, cultural performances, and stunning sunset views over the dunes.',
    propertyType: 'Camp',
    pricePerNight: 5200,
    locationState: 'Rajasthan',
    locationCity: 'Jaipur',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Cultural Programs', 'Camel Safari', 'Bonfire', 'Traditional Meals', 'Stargazing', 'Music Performance'],
    images: [
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.8,
    reviewCount: 92,
    hostName: 'Vikram Rathore',
    hostImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    title: 'Beachfront Beach Hut',
    description: 'Wake up to the sound of waves in this charming beach hut. Direct beach access, outdoor shower, and stunning sunset views. Perfect for a peaceful Goa getaway.',
    propertyType: 'Beach Hut',
    pricePerNight: 2800,
    locationState: 'Goa',
    locationCity: 'Palolem',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Beach Access', 'Outdoor Shower', 'WiFi', 'Fan', 'Hammock', 'BBQ Area'],
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.9,
    reviewCount: 89,
    hostName: 'Nirma Ji',
    hostImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    title: 'Mountain View Treehouse',
    description: 'Unique treehouse experience surrounded by pine forests with panoramic Himalayan views. Eco-friendly design with solar power and organic meals available.',
    propertyType: 'Treehouse',
    pricePerNight: 4200,
    locationState: 'Himachal Pradesh',
    locationCity: 'Manali',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Mountain View', 'Solar Power', 'Organic Meals', 'Bonfire', 'Trekking Guide', 'Hot Water'],
    images: [
      'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 34,
    hostName: 'Vikram Thakur',
    hostImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '4',
    title: 'Riverside Heritage Home',
    description: 'Colonial-era bungalow on the banks of Ganges. Experience spiritual Varanasi with morning aarti views from your balcony. Traditional Indian hospitality at its finest.',
    propertyType: 'Heritage Home',
    pricePerNight: 3200,
    locationState: 'Uttar Pradesh',
    locationCity: 'Varanasi',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['River View', 'Traditional Cuisine', 'WiFi', 'Library', 'Yoga Space', 'Air Conditioning'],
    images: [
      'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.6,
    reviewCount: 56,
    hostName: 'Anita Sharma',
    hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '5',
    title: 'Backwater Houseboat Stay',
    description: 'Authentic Kerala houseboat experience with chef-prepared traditional meals. Cruise through serene backwaters and stay overnight in comfort.',
    propertyType: 'Houseboat',
    pricePerNight: 5500,
    locationState: 'Kerala',
    locationCity: 'Alleppey',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Chef Service', 'Air Conditioning', 'Backwater Cruise', 'Fishing', 'Traditional Meals', 'Sundeck'],
    images: [
      'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 5.0,
    reviewCount: 123,
    hostName: 'Kurien Thomas',
    hostImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '6',
    title: 'Buddhist Monastery Homestay',
    description: 'Stay with a local Ladakhi family near ancient monasteries. Experience Buddhist culture, meditation sessions, and breathtaking mountain landscapes.',
    propertyType: 'Homestay',
    pricePerNight: 2200,
    locationState: 'Ladakh',
    locationCity: 'Leh',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Cultural Experience', 'Home-cooked Meals', 'Meditation Space', 'Mountain View', 'Monastery Tours', 'Local Guide'],
    images: [
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.9,
    reviewCount: 67,
    hostName: 'Tsering Dorjee',
    hostImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '7',
    title: 'Luxury Villa with Private Pool',
    description: 'Modern luxury villa in North Goa with private pool, chef on request, and close to popular beaches. Perfect for families and groups.',
    propertyType: 'Villa',
    pricePerNight: 8900,
    locationState: 'Goa',
    locationCity: 'Candolim',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Private Pool', 'Chef Available', 'WiFi', 'Air Conditioning', 'Garden', 'BBQ', 'Parking', 'Smart TV'],
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.8,
    reviewCount: 92,
    hostName: 'Priya Desai',
    hostImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '8',
    title: 'Traditional Mud House',
    description: 'Authentic Kutch experience in a beautifully decorated mud house. Experience village life, traditional crafts, and starlit nights in the Rann.',
    propertyType: 'Mud House',
    pricePerNight: 1800,
    locationState: 'Gujarat',
    locationCity: 'Kutch',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Traditional Decor', 'Cultural Programs', 'Craft Workshops', 'Village Tours', 'Home-cooked Meals', 'Stargazing'],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 41,
    hostName: 'Ramesh Bhai',
    hostImage: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2a',
    title: 'Luxury Beachfront Villa',
    description: 'Exclusive beachfront villa in Goa with infinity pool overlooking the Arabian Sea. Perfect for a luxury getaway.',
    propertyType: 'Villa',
    pricePerNight: 12000,
    locationState: 'Goa',
    locationCity: 'Candolim',
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 5,
    amenities: ['Infinity Pool', 'Private Beach', 'Chef Service', 'WiFi', 'Air Conditioning', 'Gym', 'BBQ', 'Bar'],
    images: [
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 5.0,
    reviewCount: 145,
    hostName: 'Antonio Gomes',
    hostImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2b',
    title: 'Portuguese Heritage Home',
    description: 'Beautiful Portuguese-style heritage home in Old Goa. Rich history, antique furniture, and charming courtyards.',
    propertyType: 'Heritage Home',
    pricePerNight: 4500,
    locationState: 'Goa',
    locationCity: 'Panjim',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Heritage Architecture', 'Garden', 'Library', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 67,
    hostName: 'Isabella D\'Souza',
    hostImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2c',
    title: 'Eco Jungle Cottage',
    description: 'Sustainable jungle cottage in South Goa. Surrounded by nature with organic gardens and wildlife sightings.',
    propertyType: 'Cottage',
    pricePerNight: 3200,
    locationState: 'Goa',
    locationCity: 'Palolem',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Eco-friendly', 'Organic Garden', 'Nature Trails', 'Bird Watching', 'Solar Power', 'Yoga Space'],
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.8,
    reviewCount: 89,
    hostName: 'Ravi Naik',
    hostImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '9',
    title: 'Modern Loft in Bandra',
    description: 'Stylish loft apartment in trendy Bandra with skyline views. Walking distance to cafes, galleries, and nightlife.',
    propertyType: 'Apartment',
    pricePerNight: 6500,
    locationState: 'Maharashtra',
    locationCity: 'Mumbai',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Modern Kitchen', 'Workspace', 'Gym', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.6,
    reviewCount: 112,
    hostName: 'Meera Kapoor',
    hostImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '9a',
    title: 'Sea-Facing Penthouse',
    description: 'Luxurious penthouse with panoramic sea views in South Mumbai. High-end amenities and prime location.',
    propertyType: 'Penthouse',
    pricePerNight: 15000,
    locationState: 'Maharashtra',
    locationCity: 'Mumbai',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Sea View', 'WiFi', 'Air Conditioning', 'Terrace', 'Modern Kitchen', 'Gym', 'Concierge', 'Parking'],
    images: [
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.9,
    reviewCount: 203,
    hostName: 'Rohan Malhotra',
    hostImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '9b',
    title: 'Artist Studio in Kala Ghoda',
    description: 'Quirky artist studio in Mumbai\'s cultural heart. Perfect for creative souls and culture enthusiasts.',
    propertyType: 'Studio',
    pricePerNight: 4200,
    locationState: 'Maharashtra',
    locationCity: 'Mumbai',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Air Conditioning', 'Art Supplies', 'Creative Space', 'Gallery Access', 'Cafe Nearby'],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 87,
    hostName: 'Anjali Patel',
    hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '9c',
    title: 'Family Home in Juhu',
    description: 'Spacious family home near Juhu Beach. Perfect for larger groups with multiple rooms and home-style comfort.',
    propertyType: 'House',
    pricePerNight: 8500,
    locationState: 'Maharashtra',
    locationCity: 'Mumbai',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Full Kitchen', 'Garden', 'Parking', 'Beach Nearby', 'Family Friendly'],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.5,
    reviewCount: 76,
    hostName: 'Sanjay Sharma',
    hostImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '10',
    title: 'Heritage Haveli in Old Delhi',
    description: 'Restored 18th-century haveli in the heart of Old Delhi. Experience history with modern comforts.',
    propertyType: 'Haveli',
    pricePerNight: 5500,
    locationState: 'Delhi',
    locationCity: 'Delhi',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['WiFi', 'Air Conditioning', 'Heritage Architecture', 'Rooftop', 'Traditional Cuisine', 'Cultural Tours'],
    images: [
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.8,
    reviewCount: 134,
    hostName: 'Amit Khanna',
    hostImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '10a',
    title: 'Modern Apartment in Connaught Place',
    description: 'Contemporary apartment in the city center with easy access to shopping, dining, and metro.',
    propertyType: 'Apartment',
    pricePerNight: 4800,
    locationState: 'Delhi',
    locationCity: 'Delhi',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'Air Conditioning', 'Modern Kitchen', 'Workspace', 'Metro Access', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.6,
    reviewCount: 98,
    hostName: 'Priya Singh',
    hostImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '10b',
    title: 'Garden Villa in South Delhi',
    description: 'Luxurious villa with sprawling gardens in upscale South Delhi. Perfect for families and groups.',
    propertyType: 'Villa',
    pricePerNight: 12000,
    locationState: 'Delhi',
    locationCity: 'Delhi',
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ['WiFi', 'Air Conditioning', 'Large Garden', 'Pool', 'Chef Available', 'Parking', 'Security'],
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.9,
    reviewCount: 156,
    hostName: 'Vikram Sethi',
    hostImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '10c',
    title: 'Boutique Stay in Hauz Khas',
    description: 'Trendy boutique accommodation in the hip Hauz Khas Village. Close to cafes, bars, and nightlife.',
    propertyType: 'Boutique',
    pricePerNight: 5200,
    locationState: 'Delhi',
    locationCity: 'Delhi',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'Air Conditioning', 'Designer Interiors', 'Cafe Access', 'Workspace', 'Terrace'],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 121,
    hostName: 'Natasha Verma',
    hostImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '11',
    title: 'Tech Professional Apartment',
    description: 'Modern apartment in Bangalore\'s IT hub with high-speed internet and workspace. Perfect for digital nomads.',
    propertyType: 'Apartment',
    pricePerNight: 3800,
    locationState: 'Karnataka',
    locationCity: 'Bangalore',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['High-speed WiFi', 'Air Conditioning', 'Workspace', 'Modern Kitchen', 'Gym', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.7,
    reviewCount: 167,
    hostName: 'Karthik Rao',
    hostImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '11a',
    title: 'Coworking-Coliving Space',
    description: 'Innovative coliving space with coworking facilities in Indiranagar. Great for networking and productivity.',
    propertyType: 'Coliving',
    pricePerNight: 2800,
    locationState: 'Karnataka',
    locationCity: 'Bangalore',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['High-speed WiFi', 'Coworking Space', 'Community Events', 'Cafe', 'Air Conditioning', 'Laundry'],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.5,
    reviewCount: 203,
    hostName: 'Divya Menon',
    hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '11b',
    title: 'Garden Cottage in Whitefield',
    description: 'Peaceful cottage with garden in the suburbs. Quiet retreat while staying connected to the city.',
    propertyType: 'Cottage',
    pricePerNight: 4500,
    locationState: 'Karnataka',
    locationCity: 'Bangalore',
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'Garden', 'Pet Friendly', 'Air Conditioning', 'Kitchen', 'Parking', 'BBQ'],
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.8,
    reviewCount: 94,
    hostName: 'Suresh Kumar',
    hostImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '11c',
    title: 'Luxury Villa in Koramangala',
    description: 'Upscale villa in trendy Koramangala with rooftop terrace and modern amenities. Close to restaurants and cafes.',
    propertyType: 'Villa',
    pricePerNight: 9500,
    locationState: 'Karnataka',
    locationCity: 'Bangalore',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['WiFi', 'Air Conditioning', 'Rooftop Terrace', 'Modern Kitchen', 'Pool', 'Gym', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    rating: 4.9,
    reviewCount: 178,
    hostName: 'Anjali Reddy',
    hostImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export const propertyTypes = [
  'Haveli',
  'Beach Hut',
  'Treehouse',
  'Heritage Home',
  'Houseboat',
  'Homestay',
  'Villa',
  'Mud House'
];

export const indianStates = [
  'Rajasthan',
  'Goa',
  'Himachal Pradesh',
  'Uttar Pradesh',
  'Kerala',
  'Ladakh',
  'Gujarat',
  'Maharashtra',
  'Karnataka',
  'Tamil Nadu',
  'West Bengal'
];
