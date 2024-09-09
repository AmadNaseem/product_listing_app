// pages/index.tsx
'use client';  // This directive tells Next.js to treat this file as a Client Component

import React, { useEffect, useState } from 'react';
import ListingCard from './components/ListingCard';
import HeaderCard from './components/Header'
import FooterCard from './components/Footer'
import { fetchListings } from './lib/api';

interface Listing {
  _id: string;
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
}

const Home: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchListings();
        setListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ padding: '20px', background: "gray"}}>
      <HeaderCard/>
      {listings.map((listing) => (
        <ListingCard key={listing._id} listing={listing} />
      ))}
    <><FooterCard/></>
    </div>
  );
};

export default Home;
