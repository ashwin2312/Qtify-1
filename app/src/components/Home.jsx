import React from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import HeroSection from "./Hero/HeroSection";
import AlbumCard from "./Card/AlbumCard";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <AlbumCard />
    </div>
  );
}
