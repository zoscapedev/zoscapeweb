export interface Listing {
  id: string;
  title: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  location: string;
}

export interface PhotoCategory {
  name: string;
  description?: string;
  images: string[];
}

export interface ListingDetail extends Listing {
  description: string;
  amenities: string[];
  host: {
    name: string;
    joinedDate: string;
    isSuperhost: boolean;
  };
  images: string[];
  photoCategories?: PhotoCategory[];
  checkIn: string;
  checkOut: string;
  houseRules: string[];
  mapEmbedUrl?: string;
}
