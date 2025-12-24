import Link from "next/link";
import Image from "next/image";
import { Listing } from "../types";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const message = `Hello, I want to book a room ${listing.title} at Zoscape.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/918459074850?text=${encodedMessage}`;
  return (
    <div className="group w-full">
      <div className="space-y-3">
        {/* Image */}
        <Link href={`/listing/${listing.id}`} className="block">
          <div className="relative rounded-xl overflow-hidden cursor-pointer w-full aspect-[5/4]">
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </Link>

        {/* Details */}
        <div className="space-y-1 w-full">
          <Link href={`/listing/${listing.id}`}>
            <h3 className="font-semibold text-gray-900 truncate cursor-pointer hover:underline">{listing.title}</h3>
          </Link>

          <p className="text-sm text-gray-600">{listing.location}</p>

          <div className="pt-2">
            <span className="font-semibold text-gray-900">₹{listing.price}</span>
            <span className="text-gray-600"> / night</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-3">
            <a
              href={listing.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
              style={{ backgroundColor: '#1295ff' }}
            >
              View on Maps
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
              style={{ backgroundColor: '#1295ff' }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
