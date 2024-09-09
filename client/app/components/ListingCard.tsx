/* eslint-disable @next/next/no-img-element */
// components/ListingCard.tsx
import React, { useState } from "react";

interface Listing {
  name: string;
  summary: string;
  space: string;
  amenities: string[];
  images: {
    picture_url: string;
  };
  price: { $numberDecimal: string };
  accommodates: { $numberInt: string };
  bedrooms: { $numberInt: string };
  bathrooms: { $numberDecimal: string };
  description: string;
  house_rules: string;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const {
    name,
    summary,
    space,
    images,
    price,
    accommodates,
    bedrooms,
    bathrooms,
    description,
    house_rules,
  } = listing;

  // State to manage "Learn More" visibility
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 bg-gray-100">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={images.picture_url}
                alt="Listing"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {name}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  <strong>Price:</strong> ${price.$numberDecimal} per night
                </h1>
                <p className="leading-relaxed mb-3">
                  <strong>Summary: </strong>
                  {summary}
                </p>
                <p className="leading-relaxed mb-3">
                  <strong>Accommodates:</strong> {accommodates.$numberInt}
                </p>
                <p className="leading-relaxed mb-3">
                  <strong>Bedrooms:</strong> {bedrooms.$numberInt}
                </p>
                <p className="leading-relaxed mb-3">
                  <strong>Bathrooms:</strong> {bathrooms.$numberDecimal}
                </p>
                <div className="flex items-center flex-wrap">
                  <a
                    className="text-indigo-500 inline-flex items-center cursor-pointer"
                    onClick={handleLearnMoreClick}
                  >
                    {showMore ? "Show Less" : "Learn More"}
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                {showMore && (
                  <div className="mt-4">
                    <p className="leading-relaxed mb-3">
                      <strong>Description: </strong>
                      {description}
                    </p>
                    <p className="leading-relaxed mb-3">
                      <strong>Space: </strong> {space}
                    </p>
                    <p className="leading-relaxed mb-3">
                      <strong>House Rules: </strong>
                      {house_rules}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCard;
