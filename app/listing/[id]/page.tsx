
"use client";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState, useEffect } from "react";
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

export default function ListingDetailPage({ params }: PageProps) {
  const [showAmenities, setShowAmenities] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const [showImageModal, setShowImageModal] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // For async params
  const [listing, setListing] = useState<any>(null);
  useEffect(() => {
    params.then(({ id }) => {
      const l = listingDetails[id];
      if (!l) notFound();
      setListing(l);
    });
  }, [params]);

  const detailedAmenities = [
    {
      section: "Bathroom",
      items: [
        "Hair dryer", "Cleaning products", "Shampoo", "Conditioner", "Body soap", "Bidet", "Shower gel"
      ]
    },
    {
      section: "Bedroom and laundry",
      items: [
        "Essentials (Towels, bed sheets, soap and toilet paper)", "Hangers", "Bed linen (Cotton linen)", "Extra pillows and blankets", "Room-darkening blinds", "Iron", "Clothes drying rack"
      ]
    },
    {
      section: "Entertainment",
      items: [
        "Ethernet connection", "43-inch HDTV with Amazon Prime Video, Disney+, Netflix", "Sound system", "Books and reading material"
      ]
    },
    {
      section: "Family",
      items: [
        "Standalone high chair – always at the listing (With padding)", "Window guards"
      ]
    },
    {
      section: "Heating and cooling",
      items: [
        "Air conditioning", "Ceiling fan"
      ]
    },
    {
      section: "Home safety",
      items: [
        "First aid kit"
      ]
    },
    {
      section: "Internet and office",
      items: [
        "Wifi", "Dedicated workspace"
      ]
    },
    {
      section: "Kitchen and dining",
      items: [
        "Kitchen", "Fridge", "Cooking basics (Pots and pans, oil, salt and pepper)", "Dishes and cutlery (Bowls, chopsticks, plates, cups, etc.)", "Gas cooker", "Wine glasses", "Baking sheet", "Rice cooker", "Dining table"
      ]
    },
    {
      section: "Location features",
      items: [
        "Private entrance (Separate street or building entrance)"
      ]
    },
    {
      section: "Outdoor",
      items: [
        "Balcony"
      ]
    },
    {
      section: "Services",
      items: [
        "Pets allowed (Assistance animals are always allowed)", "Long-term stays allowed (Allow stays of 28 days or more)", "Self check-in", "Lockbox", "Housekeeping available from 10:00 am to 11:00 am, every day – available at extra cost"
      ]
    },
    {
      section: "Not included",
      items: [
        "Exterior security cameras on property", "Washing machine", "Dryer", "Smoke alarm", "Carbon monoxide alarm", "Heating", "Hot water"
      ]
    }
  ];

  if (!listing) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header roomName={listing.title} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
        </div>

        {/* Images */}
        <div className="grid grid-cols-4 gap-1 mb-8 rounded-xl overflow-hidden min-h-[400px]">
          <div className="col-span-2 row-span-2 relative cursor-pointer" onClick={() => { setSelectedImageIndex(0); setShowImageModal(true); }}>
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
          {listing.images.slice(1, 5).map((image: any, index: any) => {
            const globalIndex = index + 1; // index in listing.images
            const isFifth = index === listing.images.slice(1, 5).length - 1; // last thumbnail (the 5th overall)
            return (
              <div key={index} className="col-span-1 row-span-1 relative cursor-pointer" onClick={() => { setSelectedImageIndex(globalIndex); setShowImageModal(true); }}>
                <Image
                  src={image}
                  alt={`${listing.title} - ${globalIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                {isFifth && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowImageModal(true); }}
                    className="absolute bottom-2 right-2 bg-white bg-opacity-70 text-black text-sm px-3 py-1 rounded"
                  >
                    Show all images
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Image modal / gallery */}
        {showImageModal && (
          <div className="fixed inset-0 z-50 bg-white overflow-y-auto" style={{
            animation: 'fadeIn 0.3s ease-in-out'
          }}>
            <style jsx>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              html {
                scroll-behavior: smooth;
              }
            `}</style>
            <div className="max-w-[1120px] mx-auto px-6 lg:px-10 py-6 text-black">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">

                  <h1 className="text-2xl font-semibold">Photo tour</h1>
                </div>
                <div className="flex gap-3">
                  <button
                    aria-label="Close gallery"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                    onClick={() => { setShowImageModal(false); setShowLightbox(false); }}
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                {listing.photoCategories ? listing.photoCategories.map((category: any, idx: number) => (
                  <a
                    key={idx}
                    href={`#category-${idx}`}
                    className="flex-none group transition-transform hover:scale-105 duration-200"
                  >
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden mb-2 cursor-pointer">
                      <Image
                        src={category.images[0]}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <p className="text-xs text-gray-700 text-center font-medium">{category.name}</p>
                  </a>
                )) : (
                  <>
                    {[
                      { name: "Living room", img: listing.images[0] },
                      { name: "Full kitchen", img: listing.images[1] },
                      { name: "Dining area", img: listing.images[2] },
                      { name: "Bedroom", img: listing.images[3] },
                      { name: "Full bathroom", img: listing.images[4] }
                    ].filter((_, idx) => listing.images[idx]).map((category, idx) => (
                      <div key={idx} className="flex-none">
                        <div className="relative w-28 h-20 rounded-lg overflow-hidden mb-2 cursor-pointer">
                          <Image src={category.img} alt={category.name} fill className="object-cover" />
                        </div>
                        <p className="text-xs text-gray-700 text-center font-medium">{category.name}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Category Sections - Vertical Scroll */}
              <div className="space-y-10">
                {listing.photoCategories ? listing.photoCategories.map((category: any, catIdx: number) => (
                  <div key={catIdx} id={`category-${catIdx}`} className="scroll-mt-20" style={{
                    opacity: 0,
                    animation: `slideUp 0.5s ease-out ${catIdx * 0.1}s forwards`
                  }}>
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold mb-1">{category.name}</h2>
                      {category.description && (
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.images.map((img: any, imgIdx: number) => {
                        const isLarge = imgIdx === 0 && category.images.length > 1;
                        const allImages = listing.photoCategories?.flatMap((cat: any) => cat.images) || listing.images;
                        const globalIndex = allImages.indexOf(img);

                        return (
                          <div
                            key={imgIdx}
                            onClick={() => { setSelectedImageIndex(globalIndex); setShowLightbox(true); }}
                            className={`relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${isLarge ? 'md:col-span-2 h-[400px]' : 'h-[280px]'
                              }`}
                          >
                            <Image
                              src={img}
                              alt={`${category.name} ${imgIdx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {listing.images.map((img: any, i: number) => {
                      const isFirst = i === 0;
                      return (
                        <div
                          key={i}
                          onClick={() => { setSelectedImageIndex(i); setShowLightbox(true); }}
                          className={`relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${isFirst ? 'md:col-span-2 h-[400px]' : 'h-[280px]'
                            }`}
                        >
                          <Image src={img} alt={`Photo ${i + 1}`} fill className="object-cover" />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Lightbox Popup */}
        {showLightbox && (
          <div className="fixed inset-0 z-[60] bg-black bg-opacity-95 flex items-center justify-center" onClick={() => setShowLightbox(false)} style={{
            animation: 'fadeIn 0.2s ease-in-out'
          }}>
            <button
              aria-label="Close lightbox"
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10 transition-opacity"
              onClick={() => setShowLightbox(false)}
            >
              ×
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const allImages = listing.photoCategories?.flatMap((cat: any) => cat.images) || listing.images;
                return (
                  <>
                    <div className="relative max-w-7xl max-h-full w-full h-full" style={{
                      animation: 'scaleIn 0.3s ease-out'
                    }}>
                      <style jsx>{`
                        @keyframes scaleIn {
                          from {
                            opacity: 0;
                            transform: scale(0.9);
                          }
                          to {
                            opacity: 1;
                            transform: scale(1);
                          }
                        }
                      `}</style>
                      <Image
                        src={allImages[selectedImageIndex]}
                        alt={`Photo ${selectedImageIndex + 1}`}
                        fill
                        className="object-contain transition-opacity duration-300"
                        key={selectedImageIndex}
                      />
                    </div>

                    {selectedImageIndex > 0 && (
                      <button
                        aria-label="Previous image"
                        onClick={(e) => { e.stopPropagation(); setSelectedImageIndex((i) => Math.max(0, i - 1)); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-opacity-100 transition-all"
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}

                    {selectedImageIndex < allImages.length - 1 && (
                      <button
                        aria-label="Next image"
                        onClick={(e) => { e.stopPropagation(); setSelectedImageIndex((i) => Math.min(allImages.length - 1, i + 1)); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-opacity-100 transition-all"
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white px-5 py-2 rounded-full text-sm font-medium">
                      {selectedImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div className="pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 text-black">{listing.type}</h2>
              <p className="text-black">
                {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
              </p>
            </div>

            {/* Description */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-black">About this place</h3>
              <p className="text-black leading-relaxed">{listing.description}</p>
            </div>

            {/* Amenities */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-black">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-black">✓</span>
                    <span className="text-black">{amenity}</span>
                  </div>
                ))}
              </div>
              <button
                className="mt-6 px-4 py-2 rounded-lg bg-gray-100 text-black font-semibold border border-gray-300 hover:bg-gray-200"
                onClick={() => setShowAmenities(true)}
              >
                Show all amenities
              </button>
              {showAmenities && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[80vh] relative">
                    <button
                      className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
                      onClick={() => setShowAmenities(false)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <h3 className="text-2xl font-bold mb-4 text-black">What this place offers</h3>
                    <div className="divide-y divide-gray-200">
                      {detailedAmenities.map((section, idx) => (
                        <div key={idx} className="py-4">
                          <h4 className="text-lg font-semibold mb-2 text-black">{section.section}</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                            {section.items.map((item, i) => (
                              <li key={i} className="text-black text-base flex items-center gap-2">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Google Maps */}
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-black">Where you'll be</h3>
              <div className="rounded-xl overflow-hidden h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=21.1048757,79.0577373&z=17&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Property Location Map"
                ></iframe>
              </div>
              <p className="mt-4 text-black">{listing.location}</p>
            </div>

            {/* House Rules */}

            {/* Host Info */}
            <div className="pb-8">
              <h3 className="text-2xl font-bold mb-6 text-black">Meet your host</h3>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Host Card (left) */}
                <div className="w-full md:w-[520px] flex flex-col gap-4">
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6">
                      <div className="flex-1 flex flex-col items-center md:items-start md:pl-4">
                        <img src="/shr.avif" alt={listing.host.name} className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-white shadow" />
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-black">{listing.host.name}</h4>
                          <span className="bg-pink-500 text-white rounded-full px-2 py-1 text-xs font-semibold">✔</span>
                        </div>
                        <p className="text-sm text-gray-500">Host</p>
                      </div>

                      <div className="hidden md:block w-px bg-gray-200" />

                      <div className="flex-1 md:flex-none md:w-40 flex flex-col items-center md:items-center justify-center text-center md:text-right md:pr-4">
                        <div className="text-lg font-bold text-black">276</div>
                        <div className="text-xs text-gray-500">Reviews</div>
                        <div className="w-full border-t border-gray-200 my-3" />
                        <div className="text-lg font-bold text-black">4.66★</div>
                        <div className="text-xs text-gray-500">Rating</div>
                        <div className="w-full border-t border-gray-200 my-3" />
                        <div className="text-lg font-bold text-black">2</div>
                        <div className="text-xs text-gray-500">Years hosting</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-black">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🕒</span>
                      <span>I spend too much time: With Guests</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">💬</span>
                      <span>Speaks English and Hindi</span>
                    </div>
                    <p className="text-black">
                      Welcome to my Airbnb! I'm a Senior Product Associate at Amazon by day, and an avid gardener and nature enthusiast in my free time. I love creating welcoming, comfortable spaces for my guests and am always happy to share local tips or have a chat. Whether you’re looking for adventure or just a peaceful retreat, I’m excited to make your stay enjoyable and memorable!
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/shre.avif" alt="Co-host" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                    <div>
                      <div className="text-black font-medium">Shreyas</div>
                      <div className="text-xs text-gray-500">Co-Host</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="text-lg font-semibold mb-2 text-black">Host details</h4>
                    <p className="text-black">Response rate: 100%<br />Responds within an hour</p>
                  </div>
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
