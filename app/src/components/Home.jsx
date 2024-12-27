import React, { useEffect, useState } from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import HeroSection from "./Hero/HeroSection";
import Divider from "@mui/material/Divider";
import styles from "./Home.module.css";
import Section from "./Section/Section";
import Filters from "./Filters/Filters";

export default function Home() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  let topAlbums;
  const getTopAlbumData = async () => {
    const response = await fetch(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    topAlbums = await response.json();
    setTopAlbumsData(topAlbums);
    return topAlbums;
  };

  let newAlbums;
  const getNewAlbumsData = async () => {
    const response = await fetch(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    newAlbums = await response.json();
    setNewAlbumsData(newAlbums);
    return newAlbums;
  };

  useEffect(() => {
    getTopAlbumData();
    getNewAlbumsData();
  }, []);

  console.log("newAlbumsData::", newAlbumsData);

  return (
    <div className={styles.blackBackground}>
      <NavbarComponent />
      <HeroSection />
      <Section albumsData={topAlbumsData} title="Top Albums" />

      <Section albumsData={newAlbumsData} title="New Albums" />
      <Filters />
    </div>
  );
}
