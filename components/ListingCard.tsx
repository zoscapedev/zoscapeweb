import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Listing } from "@prisma/client";
import Skeleton from "react-loading-skeleton";

import HeartButton from "./HeartButton";
import Image from "./Image";
import { formatPrice } from "@/utils/helper";
import ListingMenu from "./ListingMenu";

interface ListingCardProps {
  data: Listing;
  reservation?: {
    id: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
  };
  hasFavorited: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  hasFavorited,
}) => {
  const price = reservation ? reservation.totalPrice : data?.price;

  let reservationDate;
  if (reservation) {
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    reservationDate = `${format(start, "PP")} - ${format(end, "PP")}`;
  }

  // Create Google Maps URL with the property location
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${data.title}, ${data.region}, ${data.country}`
  )}`;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 p-3 flex items-center justify-between w-full z-10">
        <div className="z-5">
          <ListingMenu id={reservation?.id || data.id} />
        </div>

        <div className="w-[28px] h-[28px] flex items-center justify-center">
          <HeartButton
            listingId={data.id}
            key={data.id}
            hasFavorited={hasFavorited}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1 w-full">
        <Link href={`/listings/${data.id}`} className="cursor-pointer">
          <div className=" overflow-hidden md:rounded-xl rounded-md">
            <div className="aspect-[1/0.95] relative bg-gray-100">
              <Image
                imageSrc={data.imageSrc}
                fill
                alt={data.title}
                effect="zoom"
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </Link>

        <Link href={`/listings/${data.id}`} className="cursor-pointer">
          <span className="font-semibold text-[16px] mt-[4px] hover:text-gray-700 transition-colors">
            {data?.region}, {data?.country}
          </span>
        </Link>

        <span className="font-light text-neutral-500 text-sm">
          {reservationDate || data.category}
        </span>

        <div className="flex flex-row items-baseline gap-1 mb-3">
          <span className="font-bold text-[#444] text-[14px]">
            $ {formatPrice(price)}
          </span>
          {!reservation && <span className="font-light">night</span>}
        </div>

        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            View on Maps
          </button>
        </a>
      </div>
    </div>
  );
};

export default ListingCard;

export const ListingSkeleton = () => {
  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-1 w-full">
        <Skeleton
          width={"100%"}
          height={"100%"}
          borderRadius={"12px"}
          className="aspect-square"
        />

        <div className="flex flex-row gap-3">
          <Skeleton height={"18px"} width={"84px"} />
          <Skeleton height={"18px"} width={"84px"} />
        </div>
        <Skeleton height={"16px"} width={"102px"} />
        <Skeleton height={"18px"} width={"132px"} />
        
        {/* Skeleton for the button */}
        <Skeleton height={"40px"} width={"100%"} borderRadius={"8px"} className="mt-2" />
      </div>
    </div>
  );
};