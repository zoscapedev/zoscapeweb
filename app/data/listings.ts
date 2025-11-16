import { Listing, ListingDetail } from "../types";

export const listings: Listing[] = [
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
      id: "9",
      title: "Zoscape 306 - Airport Entire Private 1.5 BHK",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      price: 2499,
      rating: 4.88,
      reviews: 82,
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauD22o0gRFm5Zdr1RSILwCqahNpiV6Ak0tzsXY",
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
      description: `Welcome to Zoscape's entire 1BHK Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, AC, water filter, gas stove, fridge, power backup and a great balcony.\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
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
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      ],
      photoCategories: [
        {
          name: "Living room",
          description: "Sofa bed · Air conditioning · Ceiling fan · Heating · TV",
          images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80"
          ]
        },
        {
          name: "Full kitchen",
          description: "Fridge · Gas cooker · Cooking basics · Dishes and cutlery",
          images: [
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          ]
        },
        {
          name: "Dining area",
          description: "Dining table · Chairs",
          images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80"
          ]
        },
        {
          name: "Bedroom",
          description: "1 queen bed · Bed linen · Extra pillows and blankets",
          images: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80"
          ]
        },
        {
          name: "Full bathroom",
          description: "Shower · Hair dryer · Cleaning products · Shampoo",
          images: [
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80"
          ]
        },
        {
          name: "Exterior",
          description: "Balcony · Building view",
          images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          ]
        },
        {
          name: "Additional photos",
          images: [
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
          ]
        }
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
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
        "https://images.unsplash.com/photo-1541542684-42a6b6a8d5b3?w=1200&q=80"
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
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
        "https://images.unsplash.com/photo-1541542684-42a6b6a8d5b3?w=1200&q=80"
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
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauD22o0gRFm5Zdr1RSILwCqahNpiV6Ak0tzsXY",
      description: `Welcome to Zoscape's entire 1BHK Private Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, water filter, gas stove, fridge, power backup for society\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
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
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauD22o0gRFm5Zdr1RSILwCqahNpiV6Ak0tzsXY",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uau2RQi5Y15Y1AbfJen46Ip3Prucho9MNE7zTOj",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauODBaMNWVPa5FSYdTuz9nbpUorMEhxltCv3RJ",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaueKyWHNuQCfxmu4yGdi5FAUoDkzNHYBEcnK1j",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauYEvvXLoWcSpPeXqk5IT9f8ngtyuRUE431l7i"
      ],
      photoCategories: [
        {
          name: "Living room",
          description: "Sofa bed · Air conditioning · Ceiling fan · Heating · TV",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uau2RQi5Y15Y1AbfJen46Ip3Prucho9MNE7zTOj",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauNav8hNeZ1e38zCvt6wPAGlbg4YpWjsUf9Trn",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaueBzmAduQCfxmu4yGdi5FAUoDkzNHYBEcnK1j"
          ]
        },
        {
          name: "Bedroom",
          description: "2 bedrooms · Queen beds · Bed linen · Extra pillows and blankets",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauODBaMNWVPa5FSYdTuz9nbpUorMEhxltCv3RJ",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauPdIl5M7UekSpcWuliOMHdCwtI1PG06xDqN82",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uaur5mxn6zSuTB3krs76lEp1eyAWDUFg0PbxIaO"
          ]
        },
        {
          name: "Full kitchen",
          description: "Fridge · Gas cooker · Cooking basics · Dishes and cutlery",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauD22o0gRFm5Zdr1RSILwCqahNpiV6Ak0tzsXY",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaudzGnQB0i7o98AyjEYaQvehmZuFbGw2CHrS6L",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaulJbEwjIxn3QGgXRKtycZkP1ADldLIzNaBMWo"
          ]
        },
        {
          name: "Dining area",
          description: "Dining table · Chairs",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaueKyWHNuQCfxmu4yGdi5FAUoDkzNHYBEcnK1j",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaulGLyzTIxn3QGgXRKtycZkP1ADldLIzNaBMWo"
          ]
        },
        {
          name: "Full bathroom",
          description: "Shower · Hair dryer · Cleaning products · Shampoo",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauEox4rnks1pqMd3FngbzBw906uUASevXCck7m",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uaui2MyjJlrFVhTaSP9AtzxUY8JuqIWbX5m7rZB"
          ]
        },
        {
          name: "Exterior",
          description: "Balcony · Building view",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauYEvvXLoWcSpPeXqk5IT9f8ngtyuRUE431l7i",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauQnV4dFh4DfturXKo10E3A6xM2mqySk9OclaY"
          ]
        },
        {
          name: "Additional photos",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uauulr6eRUPXv6j2ZLp07RQDAt5HiMgdSazkWKo",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauDidOVd8RFm5Zdr1RSILwCqahNpiV6Ak0tzsX",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uaujo3QpnmfRd04WqDx6o3tkrJlQMpeSnX1yPuG",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uauz4vzeD2Wbs9IkUtJNZgfL1VyqYv3De5r6xRi",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauewLokfuQCfxmu4yGdi5FAUoDkzNHYBEcnK1j",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaujntYCiZmfRd04WqDx6o3tkrJlQMpeSnX1yPu",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauL200mwjJNrPIGYgHRawZ5mQKlcCbxWTydX7e"
          ]
        }
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
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
        "https://images.unsplash.com/photo-1541542684-42a6b6a8d5b3?w=1200&q=80"
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
