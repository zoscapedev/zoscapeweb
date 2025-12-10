import { Listing, ListingDetail } from "../types";

export const listings: Listing[] = [
    {
      id: "504",
      title: "Zoscape 504 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.67,
      reviews: 97,
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UautONXginQqFolOd3kEUNnLsTVb0CBt9pK25rv",
      location: "Nagpur, India"
    },
    {
      id: "203",
      title: "Zoscape 203 - Airport Entire Private 1 BHK",
      type: "Entire rental unit",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.9,
      reviews: 30,
      image: "/203/hall/203_hall.jpg",
      location: "Nagpur, India"
    },
    {
      id: "509",
      title: "Zoscape 509 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.7,
      reviews: 83,
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauXQvC7IlFm3b5ACYhf2UMxJlokwNicasu1SqF",
      location: "Nagpur, India"
    },
    {
      id: "306",
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
      id: "101",
      title: "Zoscape - Entire Private 1 BHK Studio",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.5,
      reviews: 0,
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauxdPpJ9To7hD0mc4ZtuEkeHx9pbi1RI5OyYa3",
      location: "Nagpur, India"
    },
];

export const listingDetails: { [key: string]: ListingDetail } = {
    "509": {
      id: "509",
      title: "Zoscape 509 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.7,
      reviews: 83,
      location: "Nagpur, India",
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauXQvC7IlFm3b5ACYhf2UMxJlokwNicasu1SqF",
      description: `Welcome to Zoscape's entire 1BHK Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, AC, water filter, gas stove, fridge, power backup and a great balcony.\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
      amenities: [
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
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauXQvC7IlFm3b5ACYhf2UMxJlokwNicasu1SqF",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauUKSNOnXq1k3gCSlvm6AcE9Ws8VKzwHanjMQ7",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaujnYS49umfRd04WqDx6o3tkrJlQMpeSnX1yPu",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uauj8TgotmfRd04WqDx6o3tkrJlQMpeSnX1yPuG",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaubBHmWx5saErM2jNn1kKI6QfLvqJhz4W9ixwD"
      ],
      photoCategories: [
        {
          name: "Hall",
          description: "Living room · Air conditioning · Ceiling fan · TV",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauXQvC7IlFm3b5ACYhf2UMxJlokwNicasu1SqF",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaubBHmWx5saErM2jNn1kKI6QfLvqJhz4W9ixwD",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauSm7Gidcsw3XviYlVyzpM6bUReTm9FHBtfjE5",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauDTzXlMRFm5Zdr1RSILwCqahNpiV6Ak0tzsXY",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauXQvT2XaFm3b5ACYhf2UMxJlokwNicasu1SqF",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauwpT0gK0xWof0QTvMYylJKpNBCzjmtbwaFH89",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uaup3aLjBZLNQl42tF5yWEKegxSaTC6DJo9kvXs",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaupVbRU6ZLNQl42tF5yWEKegxSaTC6DJo9kvXs",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauTluVNdFp93tX5zQSfNrlYhR08gMaDk6pPdoj"
          ]
        },
        {
          name: "Bedroom",
          description: "1 queen bed · Bed linen · Extra pillows and blankets · AC",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauUKSNOnXq1k3gCSlvm6AcE9Ws8VKzwHanjMQ7",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauIKzgyWSNpuWESzf2wcydRrAYtsKBFUDMmeZb",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uau2sE4r2215Y1AbfJen46Ip3Prucho9MNE7zTO",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaucjscEukP2OsWJ6Sh45Qq3dpxEbF9fIHuimoe",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaupVbRU6ZLNQl42tF5yWEKegxSaTC6DJo9kvXs"
          ]
        },
        {
          name: "Full kitchen",
          description: "Fridge · Gas cooker · Cooking basics · Dishes and cutlery",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaujnYS49umfRd04WqDx6o3tkrJlQMpeSnX1yPu",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uau96GdD4Cp4nwYzVroMih0O7UlfeSTjqGb5Ns3"
          ]
        },
        {
          name: "Full bathroom",
          description: "Shower · Hair dryer · Cleaning products · Shampoo",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uauj8TgotmfRd04WqDx6o3tkrJlQMpeSnX1yPuG",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uau9jL19anCp4nwYzVroMih0O7UlfeSTjqGb5Ns"
          ]
        },
        {
          name: "Additional photos",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauJnzAd39D7rbs1cByLnQOzCluN5MGwqEdm8fF",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5Uaux6qvj6To7hD0mc4ZtuEkeHx9pbi1RI5OyYa3"
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
    "504": {
      id: "504",
      title: "Zoscape 504 - Airport Entire Private 1BHK",
      type: "Entire apartment",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.67,
      reviews: 97,
      location: "Nagpur, India",
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauniTqv1DJYM2yUon847cpeRviFx9OHfZhKXSb",
      description: `Welcome to Zoscape's entire 1BHK Airport Apartment is located 1 Km from the Nagpur international airport.\nYou will find all the necessities nearby as the metro station (Jaiprakash Nagar metro) is under 1 Km. Situated in a central area of Nagpur. Very peaceful with all the amenities like lift, western washroom, water filter, gas stove, fridge, power backup and a great balcony.\n\nOther things to note\nAll guests should be 18+\nWe will require all guest ids before checkin!`,
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
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauniTqv1DJYM2yUon847cpeRviFx9OHfZhKXSb",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UautONXginQqFolOd3kEUNnLsTVb0CBt9pK25rv",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauRzKeMpdtkBZlSTJAUimgwsEG2cx8XbVQMYaH",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauLtiKnNmjJNrPIGYgHRawZ5mQKlcCbxWTydX7",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaujuOcHimfRd04WqDx6o3tkrJlQMpeSnX1yPuG"
      ],
      photoCategories: [
        {
          name: "Hall",
          description: "Living room · Air conditioning · Ceiling fan · TV",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UautONXginQqFolOd3kEUNnLsTVb0CBt9pK25rv",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaujuOcHimfRd04WqDx6o3tkrJlQMpeSnX1yPuG",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauJXfXy59D7rbs1cByLnQOzCluN5MGwqEdm8fF"
          ]
        },
        {
          name: "Bedroom",
          description: "1 queen bed · Bed linen · Extra pillows and blankets · AC",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauniTqv1DJYM2yUon847cpeRviFx9OHfZhKXSb",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauFiGxvGVE3sNnTaqlYIjwg01PkW4xvdoMFC2O",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauCH0g5PLWmRZwPTtXEvFOo2bpuYIAV9idkJ6Q",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauCw5u88LWmRZwPTtXEvFOo2bpuYIAV9idkJ6Q",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauUVB3RteXq1k3gCSlvm6AcE9Ws8VKzwHanjMQ",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaukVHXSdNYLaJUQqM9WDICB84ZhrskpdoRKE1t"
          ]
        },
        {
          name: "Full kitchen",
          description: "Fridge · Gas cooker · Cooking basics · Dishes and cutlery",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauRzKeMpdtkBZlSTJAUimgwsEG2cx8XbVQMYaH",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauihU18FrFVhTaSP9AtzxUY8JuqIWbX5m7rZB1",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauxQLpf6To7hD0mc4ZtuEkeHx9pbi1RI5OyYa3",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaujkEPS8mfRd04WqDx6o3tkrJlQMpeSnX1yPuG"
          ]
        },
        {
          name: "Full bathroom",
          description: "Shower · Hair dryer · Cleaning products · Shampoo",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauLtiKnNmjJNrPIGYgHRawZ5mQKlcCbxWTydX7",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauJGFHkc9D7rbs1cByLnQOzCluN5MGwqEdm8fF"
          ]
        },
        {
          name: "Dining area",
          description: "Dining table · Chairs",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauC9jv5qLWmRZwPTtXEvFOo2bpuYIAV9idkJ6Q",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauYRWB33oWcSpPeXqk5IT9f8ngtyuRUE431l7i"
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
    "101": {
      id: "101",
      title: "Zoscape - Entire Private 1 BHK Studio",
      type: "Entire rental unit",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.5,
      reviews: 0,
      location: "Nagpur, India",
      image: "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauxdPpJ9To7hD0mc4ZtuEkeHx9pbi1RI5OyYa3",
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
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauxdPpJ9To7hD0mc4ZtuEkeHx9pbi1RI5OyYa3",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauWObnvQHqZjBtNX051FwMkrcba4W6dTsmPyvH",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauUHmzs6Xq1k3gCSlvm6AcE9Ws8VKzwHanjMQ7",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaulKqfD4Ixn3QGgXRKtycZkP1ADldLIzNaBMWo",
        "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauhbqkjAaKJDezqG3ZgdmRwBOk5t1y0sYAK8Ii"
      ],
      photoCategories: [
        {
          name: "Hall",
          description: "Living room · Air conditioning · TV",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauxdPpJ9To7hD0mc4ZtuEkeHx9pbi1RI5OyYa3",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauhbqkjAaKJDezqG3ZgdmRwBOk5t1y0sYAK8Ii",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauDiMfpx1RFm5Zdr1RSILwCqahNpiV6Ak0tzsX",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauRriboWadtkBZlSTJAUimgwsEG2cx8XbVQMYa"
          ]
        },
        {
          name: "Bedroom",
          description: "1 queen bed · Bed linen · Extra pillows and blankets · AC",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauWObnvQHqZjBtNX051FwMkrcba4W6dTsmPyvH",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauKXUdupBmbfL8APWjs1dCNh32Yavg5o70JV9O"
          ]
        },
        {
          name: "Full kitchen",
          description: "Fridge · Gas cooker · Cooking basics · Dishes and cutlery",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauUHmzs6Xq1k3gCSlvm6AcE9Ws8VKzwHanjMQ7",
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauFZB9JqVE3sNnTaqlYIjwg01PkW4xvdoMFC2O"
          ]
        },
        {
          name: "Full bathroom",
          description: "Shower · Hair dryer · Cleaning products · Shampoo",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UaulKqfD4Ixn3QGgXRKtycZkP1ADldLIzNaBMWo"
          ]
        },
        {
          name: "Dining area",
          description: "Dining table · Chairs",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauFscAK7VE3sNnTaqlYIjwg01PkW4xvdoMFC2O"
          ]
        },
        {
          name: "Wardrobe",
          description: "Storage space",
          images: [
            "https://4qmsniikf1.ufs.sh/f/8jEDDmwe5UauYdnUupoWcSpPeXqk5IT9f8ngtyuRUE431l7i"
          ]
        }
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
    "306": {
      id: "306",
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
    "203": {
      id: "203",
      title: "Zoscape 203 - Airport Entire Private 1 BHK",
      type: "Entire rental unit",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 2499,
      rating: 4.9,
      reviews: 30,
      location: "Nagpur, India",
      image: "/203/hall/203_hall(2).jpg",
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
        "/203/hall/203_hall(2).jpg",
        "/203/bedroom/203_bedroom.jpg",
        "/203/kitchen/203_kitchen.jpeg",
        "/203/bathroom/203_bathroom.jpeg",
        "/203/bedroom/203_bedroom(5).jpg"
      ],            
      photoCategories: [
        {
          name: "Hall",
          description: "Living room · Air conditioning · Ceiling fan · TV",
          images: [
            "/203/hall/203_hall.jpg",
            "/203/hall/203_hall(1).jpg",
            "/203/hall/203_hall(2).jpg",
          ]
        },
        {
          name: "Bedroom",
          description: "1 queen bed · Bed linen · Extra pillows and blankets · AC",
          images: [
            "/203/bedroom/203_bedroom.jpg",
            "/203/bedroom/203_bedroom(1).jpg",
            "/203/bedroom/203_bedroom(2).jpg",
            "/203/bedroom/203_bedroom(3).jpg",
            "/203/bedroom/203_bedroom(4).jpg",
            "/203/bedroom/203_bedroom(5).jpg"
          ]
        },
        {
          name: "Full kitchen",
          description: "Fridge · Gas cooker · Cooking basics · Dishes and cutlery",
          images: [
            "/203/kitchen/203_kitchen.jpeg",
            "/203/kitchen/203_kitchen(1).jpeg",
            "/203/kitchen/203_kitchen(2).jpeg",
            "/203/kitchen/203_kitchen.jpg",
            "/203/kitchen/203_kitchen(1).jpg",
            "/203/kitchen/203_kitchen(2).jpg",
            "/203/kitchen/203_kitchen(3).jpg",
            "/203/kitchen/203_kitchen(4).jpg",
            "/203/kitchen/203_kitchen(5).jpg"
          ]
        },
        {
          name: "Dining area",
          description: "Dining table · Chairs · Tables",
          images: [
            "/203/dining/203_dining.jpg",
            "/203/dining/203_dining(1).jpg",
            // "/203/dining/203_dining(2).jpg"
          ]
        },
        {
          name: "Full bathroom",
          description: "Shower · Hair dryer · Cleaning products · Shampoo",
          images: [
            "/203/bathroom/203_bathroom.jpeg",
            "/203/bathroom/203_bathroom(1).jpeg"
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
    }
};
