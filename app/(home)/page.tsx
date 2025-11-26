"use client";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import PaginationControl from "@/components/PaginationControl";
import PropertySection from "@/components/PropertySection";
import SearchBar from "@/components/SearchBar";
import React from "react";

const allProperties = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: `Property ${i + 1}`,
  description: `Description for property ${i + 1}`,
  // Add more mock fields here as needed
}));

export default function Home() {
  const totalPages = 1 + Math.ceil((allProperties.length - 4) / 12);

  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <>
      <Hero />
      <SearchBar />
      <IntroSection />
      <PropertySection properties={allProperties} currentPage={currentPage} />
      <PaginationControl
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
