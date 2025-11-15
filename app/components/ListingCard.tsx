import Link from "next/link";
import Image from "next/image";
import { Listing } from "../types";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listing/${listing.id}`} className="group cursor-pointer">
      <div className="space-y-3">
        {/* Image */}
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Details */}
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-900 truncate pr-2">{listing.title}</h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-sm">⭐</span>
              <span className="text-sm font-medium">{listing.rating}</span>
              <span className="text-sm text-gray-500">({listing.reviews})</span>
            </div>
          </div>

          <p className="text-sm text-gray-600">{listing.location}</p>
          <p className="text-sm text-gray-600">{listing.type}</p>
          <p className="text-sm text-gray-600">
            {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
          </p>

          <div className="pt-1">
            <span className="font-semibold text-gray-900">₹{listing.price}</span>
            <span className="text-gray-600"> / night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
