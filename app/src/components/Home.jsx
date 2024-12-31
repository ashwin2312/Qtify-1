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
  const [songsData, setSongsData] = useState([]);
  const [genresData, setGenresData] = useState([]);

  let topAlbums;
  const getTopAlbumData = async () => {
    const response = await fetch(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    topAlbums = await response.json();
    setTopAlbumsData(topAlbums);
    // return topAlbums;
  };

  let newAlbums;
  const getNewAlbumsData = async () => {
    const response = await fetch(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    newAlbums = await response.json();
    setNewAlbumsData(newAlbums);
    // return newAlbums;
  };

  let songs;
  const getSongsData = async () => {
    const response = await fetch("https://qtify-backend-labs.crio.do/songs");
    songs = await response.json();
    setSongsData(songs);
    // return songs;
  };

  let genres;
  const getGenresData = async () => {
    const res = await fetch("https://qtify-backend-labs.crio.do/genres");
    genres = await res.json();
    setGenresData(genres.data);
    // console.log("genres::", genres);
  };

  useEffect(() => {
    getTopAlbumData();
    getNewAlbumsData();
    getSongsData();
    getGenresData();
  }, []);

  // console.log("newAlbumsData::", newAlbumsData);

  return (
    <div className={styles.blackBackground}>
      <NavbarComponent />
      <HeroSection />
      <div className={styles.padding}>
        <div className={styles.bottomMargin}>
          <Section albumsData={topAlbumsData} title="Top Albums" />
        </div>
        <div className={styles.bottomMargin}>
          <Section albumsData={newAlbumsData} title="New Albums" />
        </div>
        <Section albumsData={songsData} genresData={genresData} title="Songs" />
      </div>
      {/* <Filters /> */}
    </div>
  );
}
