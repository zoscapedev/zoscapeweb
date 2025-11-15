import Link from "next/link";
import Image from "next/image";
import { Listing } from "../types";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="group">
      <div className="space-y-3">
        {/* Image */}
        <Link href={`/listing/${listing.id}`} className="block">
          <div className="relative rounded-xl overflow-hidden cursor-pointer" style={{ width: '250px', height: '200px' }}>
            <Image
              src={listing.image}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="250px"
            />
          </div>
        </Link>

        {/* Details */}
        <div className="space-y-1" style={{ width: '250px' }}>
          <Link href={`/listing/${listing.id}`}>
            <h3 className="font-semibold text-gray-900 truncate cursor-pointer hover:underline">{listing.title}</h3>
          </Link>

          <p className="text-sm text-gray-600">{listing.location}</p>

          <div className="pt-2">
            <span className="font-semibold text-gray-900">₹{listing.price}</span>
            <span className="text-gray-600"> / night</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-1.5 pt-3">
            <a 
              href="https://maps.app.goo.gl/9V7QqC2eJLc48H4v8?g_st=ipc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors" 
              style={{ backgroundColor: '#1295ff' }}
            >
              View on Maps
            </a>
            <button className="flex-1 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors" style={{ backgroundColor: '#1295ff' }}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
