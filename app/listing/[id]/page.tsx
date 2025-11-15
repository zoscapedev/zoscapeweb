import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";
import { listingDetails } from "../../data/listings";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const listing = listingDetails[id];

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              ⭐ {listing.rating} · {listing.reviews} reviews
            </span>
            <span className="text-gray-600">{listing.location}</span>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden h-[400px]">
          <div className="col-span-2 row-span-2 relative">
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
          {listing.images.slice(1, 3).map((image, index) => (
            <div key={index} className="col-span-1 row-span-1 relative">
              <Image
                src={image}
                alt={`${listing.title} - ${index + 2}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div className="pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold mb-2">{listing.type}</h2>
              <p className="text-gray-600">
                {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
              </p>
            </div>

            {/* Description */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4">About this place</h3>
              <p className="text-gray-600 leading-relaxed">{listing.description}</p>
            </div>

            {/* Amenities */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-700">✓</span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Where you'll be</h3>
              <div className="bg-gray-100 rounded-xl h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <p className="text-gray-500 text-lg mb-2">📍 Google Maps</p>
                  <p className="text-gray-400 text-sm">Map embed will be placed here</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{listing.location}</p>
            </div>

            {/* House Rules */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4">House rules</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">Check-in:</span>
                  <span className="text-gray-900 font-medium">{listing.checkIn}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">Check-out:</span>
                  <span className="text-gray-900 font-medium">{listing.checkOut}</span>
                </div>
                <div className="mt-4 space-y-2">
                  {listing.houseRules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-gray-700">•</span>
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Host Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Hosted by {listing.host.name}</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {listing.host.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{listing.host.name}</p>
                  <p className="text-gray-600 text-sm">Joined {listing.host.joinedDate}</p>
                  {listing.host.isSuperhost && (
                    <p className="text-rose-600 text-sm font-medium">⭐ Superhost</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-xl p-6 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹{listing.price}</span>
                  <span className="text-gray-600">/ night</span>
                </div>
              </div>

              <Calendar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
