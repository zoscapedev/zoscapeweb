import { Listing, ListingDetail } from "../types";

export const listings: Listing[] = [
  {
    id: "1",
    title: "Cozy Beachfront Villa",
    type: "Entire villa",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 2499,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    location: "Goa, India"
  },
  {
    id: "2",
    title: "Modern Downtown Apartment",
    type: "Entire apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 2499,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    location: "Mumbai, India"
  },
  {
    id: "3",
    title: "Luxury Mountain Retreat",
    type: "Entire house",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 2499,
    rating: 5.0,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    location: "Manali, India"
  },
  {
    id: "4",
    title: "Charming Heritage Home",
    type: "Entire home",
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    price: 2499,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    location: "Jaipur, India"
  },
  {
    id: "5",
    title: "Tropical Garden Bungalow",
    type: "Entire bungalow",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    price: 2499,
    rating: 4.9,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&q=80",
    location: "Kerala, India"
  },
  {
    id: "6",
    title: "Riverside Cottage",
    type: "Entire cottage",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    price: 2499,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    location: "Rishikesh, India"
  }
];

export const listingDetails: { [key: string]: ListingDetail } = {
  "1": {
    ...listings[0],
    description: "Experience the perfect beach getaway in this stunning beachfront villa. Wake up to the sound of waves and enjoy breathtaking ocean views from every room. This spacious property features modern amenities, a private pool, and direct beach access.",
    amenities: [
      "Wifi",
      "Kitchen",
      "Free parking",
      "Pool",
      "Air conditioning",
      "Beach access",
      "Outdoor dining area",
      "BBQ grill",
      "Ocean view",
      "TV with streaming services"
    ],
    host: {
      name: "Rajesh Kumar",
      joinedDate: "January 2020",
      isSuperhost: true
    },
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: [
      "No smoking",
      "No pets",
      "No parties or events",
      "Quiet hours after 10 PM"
    ]
  },
  "2": {
    ...listings[1],
    description: "Modern and stylish apartment in the heart of downtown Mumbai. Perfect for business travelers or couples exploring the city. Walking distance to major attractions, restaurants, and shopping centers.",
    amenities: [
      "Wifi",
      "Kitchen",
      "Elevator",
      "Air conditioning",
      "Washer",
      "Workspace",
      "TV with cable",
      "City view",
      "24/7 security",
      "Gym access"
    ],
    host: {
      name: "Priya Sharma",
      joinedDate: "March 2019",
      isSuperhost: true
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    houseRules: [
      "No smoking",
      "No pets",
      "No parties",
      "Keep common areas clean"
    ]
  },
  "3": {
    ...listings[2],
    description: "Escape to this luxurious mountain retreat surrounded by snow-capped peaks and pine forests. Perfect for families and groups seeking adventure and relaxation. Features include a fireplace, mountain views, and proximity to hiking trails.",
    amenities: [
      "Wifi",
      "Full kitchen",
      "Free parking",
      "Fireplace",
      "Heating",
      "Mountain view",
      "Balcony",
      "Hot tub",
      "Board games",
      "Netflix"
    ],
    host: {
      name: "Amit Verma",
      joinedDate: "June 2018",
      isSuperhost: false
    },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    ],
    checkIn: "4:00 PM",
    checkOut: "10:00 AM",
    houseRules: [
      "No smoking inside",
      "Pets allowed with prior approval",
      "No loud music after 9 PM",
      "Please respect the neighbors"
    ]
  },
  "4": {
    ...listings[3],
    description: "Step back in time in this beautifully restored heritage home in the Pink City. Traditional Rajasthani architecture meets modern comfort. Close to major tourist attractions and local markets.",
    amenities: [
      "Wifi",
      "Kitchen",
      "Free parking",
      "Air conditioning",
      "Traditional decor",
      "Courtyard",
      "Rooftop terrace",
      "Heritage architecture",
      "Local artwork",
      "Tea/coffee maker"
    ],
    host: {
      name: "Vikram Singh",
      joinedDate: "September 2017",
      isSuperhost: true
    },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    houseRules: [
      "No smoking",
      "No pets",
      "Respect cultural artifacts",
      "Remove shoes inside"
    ]
  },
  "5": {
    ...listings[4],
    description: "Immerse yourself in nature at this peaceful garden bungalow surrounded by tropical plants and palm trees. Perfect for a romantic getaway or quiet retreat. Listen to birds chirping and enjoy Kerala's natural beauty.",
    amenities: [
      "Wifi",
      "Kitchen",
      "Free parking",
      "Garden",
      "Air conditioning",
      "Outdoor seating",
      "Nature view",
      "Hammock",
      "Bicycle",
      "Local spices tour"
    ],
    host: {
      name: "Lakshmi Menon",
      joinedDate: "February 2021",
      isSuperhost: false
    },
    images: [
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    houseRules: [
      "No smoking",
      "No pets",
      "Preserve the garden",
      "Quiet hours after 10 PM"
    ]
  },
  "6": {
    ...listings[5],
    description: "Cozy riverside cottage perfect for yoga enthusiasts and nature lovers. Located near the Ganges, offering peaceful views and proximity to yoga centers and adventure activities like rafting.",
    amenities: [
      "Wifi",
      "Kitchenette",
      "River view",
      "Meditation space",
      "Fan",
      "Balcony",
      "Yoga mat",
      "Books",
      "Hot water",
      "Peaceful location"
    ],
    host: {
      name: "Arjun Patel",
      joinedDate: "May 2019",
      isSuperhost: true
    },
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    houseRules: [
      "No smoking",
      "No pets",
      "No alcohol",
      "Maintain peaceful environment"
    ]
  }
};
