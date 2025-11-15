import { Listing, ListingDetail } from "../types";

export const listings: Listing[] = [
    {
      id: "8",
      title: "Zoscape 509 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.7,
      reviews: 83,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      location: "Nagpur, India"
    },
    {
      id: "7",
      title: "Zoscape 504 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.67,
      reviews: 97,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      location: "Nagpur, India"
    },
    {
      id: "9",
      title: "Zoscape 306 - Airport Entire Private 1.5 BHK",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      price: 2499,
      rating: 4.88,
      reviews: 82,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      location: "Nagpur, India"
    },
    {
      id: "10",
      title: "Zoscape 203 - Airport Entire Private 1 BHK",
      type: "Entire rental unit",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.9,
      reviews: 30,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      location: "Nagpur, India"
    },
    {
      id: "11",
      title: "Zoscape - Entire Private 1 BHK Studio",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.5,
      reviews: 0,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      location: "Nagpur, India"
    },
];

export const listingDetails: { [key: string]: ListingDetail } = {
    "8": {
      id: "8",
      title: "Zoscape 509 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.7,
      reviews: 83,
      location: "Nagpur, India",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      description: `Welcome to Zoscape’s entire 1BHK Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, AC, water filter, gas stove, fridge, power backup and a great balcony.\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
      amenities: [
        //sdfsd
        "Lift",
        "Western washroom",
        "AC",
        "Water filter",
        "Gas stove",
        "Fridge",
        "Power backup",
        "Balcony",
        "Metro nearby",
        "Peaceful area"
      ],
      host: {
        name: "Srushtii",
        joinedDate: "November 2023",
        isSuperhost: true
      },
      images: [
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      houseRules: [
        "All guests should be 18+",
        "Guest IDs required before check-in",
        "No parties",
        "No smoking"
      ]
    },
    "7": {
      id: "7",
      title: "Zoscape 504 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.67,
      reviews: 97,
      location: "Nagpur, India",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      description: `Welcome to Zoscape’s entire 1BHK Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, water filter, gas stove, fridge, power backup and a great balcony.\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
      amenities: [
        "Lift",
        "Western washroom",
        "Water filter",
        "Gas stove",
        "Fridge",
        "Power backup",
        "Balcony",
        "Metro nearby",
        "Peaceful area"
      ],
      host: {
        name: "Srushtii",
        joinedDate: "November 2023",
        isSuperhost: true
      },
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      houseRules: [
        "All guests should be 18+",
        "Guest IDs required before check-in",
        "No parties",
        "No smoking"
      ]
    },
    "11": {
      id: "11",
      title: "Zoscape - Entire Private 1 BHK Studio",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.5,
      reviews: 0,
      location: "Nagpur, India",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      description: `Welcome to 1BHK Private Studio Apartment in East Nagpur is located Nearby from the Nagpur international airport and Nagpur Railway Station.\nYou will find all the necessities nearby as the metro station (Vaishnodevi Chowk metro) is 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like western washroom, water filter, gas stove, fridge, AC. Though the property is old we maintained it quite well.\n\nOther things to note\nSelf check-in with the lockbox. Furry friends welcome.`,
      amenities: [
        "Kitchen",
        "Free on-street parking",
        "TV",
        "Private patio or balcony",
        "Carbon monoxide alarm",
        "Wifi",
        "Pets allowed",
        "Air conditioning",
        "Exterior security cameras on property",
        "Smoke alarm"
      ],
      host: {
        name: "Sakshi",
        joinedDate: "June 2025",
        isSuperhost: false
      },
      images: [
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      houseRules: [
        "Self check-in with the lockbox",
        "Furry friends welcome",
        "No parties",
        "No smoking"
      ]
    },
    "9": {
      id: "9",
      title: "Zoscape 306 - Airport Entire Private 1.5 BHK",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      price: 2499,
      rating: 4.88,
      reviews: 82,
      location: "Nagpur, India",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      description: `Welcome to Zoscape’s entire 1BHK Private Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, water filter, gas stove, fridge, power backup for society\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
      amenities: [
        "Lift",
        "Western washroom",
        "Water filter",
        "Gas stove",
        "Fridge",
        "Power backup for society",
        "Metro nearby",
        "Peaceful area"
      ],
      host: {
        name: "Srushtii",
        joinedDate: "November 2023",
        isSuperhost: true
      },
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      houseRules: [
        "All guests should be 18+",
        "Guest IDs required before check-in",
        "No parties",
        "No smoking"
      ]
    },
    "10": {
      id: "10",
      title: "Zoscape 203 - Airport Entire Private 1 BHK",
      type: "Entire rental unit",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.9,
      reviews: 30,
      location: "Nagpur, India",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      description: `Welcome to Zoscape’s entire 1BHK Private Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, water filter, gas stove, fridge, power backup for society\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
      amenities: [
        "Lift",
        "Western washroom",
        "Water filter",
        "Gas stove",
        "Fridge",
        "Power backup for society",
        "Metro nearby",
        "Peaceful area"
      ],
      host: {
        name: "Srushtii",
        joinedDate: "November 2023",
        isSuperhost: true
      },
      images: [
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      houseRules: [
        "All guests should be 18+",
        "Guest IDs required before check-in",
        "No parties",
        "No smoking"
      ]
    }
};
