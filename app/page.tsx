import React, { FC, Suspense } from "react";

import ListingCard from "@/components/ListingCard";
import LoadMore from "@/components/LoadMore";
import EmptyState from "@/components/EmptyState";

import { getListings } from "@/services/listing";
import { getFavorites } from "@/services/favorite";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams?: { [key: string]: string | undefined };
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  const { listings, nextCursor } = await getListings(searchParams);
  const favorites = await getFavorites();

  if (!listings || listings.length === 0) {
    return (
      <EmptyState
        title="No Listings found"
        subtitle="Looks like you have no properties."
      />
    );
  }

  return (
    <>
      <section className="main-container">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              All Apartments
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {listings.map((listing) => {
              const hasFavorited = favorites.includes(listing.id);
              return (
                <ListingCard
                  key={listing.id}
                  data={listing}
                  hasFavorited={hasFavorited}
                />
              );
            })}
          </div>

          {nextCursor && (
            <div className="flex justify-center mt-8">
              <Suspense fallback={<div className="animate-pulse">Loading more...</div>}>
                <LoadMore
                  nextCursor={nextCursor}
                  fnArgs={searchParams}
                  queryFn={getListings}
                  queryKey={["listings", searchParams]}
                  favorites={favorites}
                />
              </Suspense>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;