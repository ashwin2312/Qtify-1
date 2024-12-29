import React, { useState } from "react";
import { Box, Grid2, Typography } from "@mui/material";

import AlbumCard from "../Card/AlbumCard";
import styles from "./Section.module.css";
import CarouselComponent from "../Carousel/CarouselComponent";
import Filters from "../Filters/Filters";

export default function Section({ albumsData, genresData, title }) {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography className={styles.textStyle}>{title}</Typography>
        {title !== "Songs" && (
          <button className={styles.btnStyle} onClick={handleClick}>
            {showAll ? "Collapse" : "Show all"}
          </button>
        )}
      </div>

      {title !== "Songs" && (
        <div>
          {showAll ? (
            <Box sx={{ flexGrow: 1 }}>
              <Grid2 container spacing={3} columns={{ xs: 2, sm: 3, md: 4 }}>
                {albumsData.map((album) => (
                  <Grid2 item="true" xs={2} sm={4} md={4} lg={4} key={album.id}>
                    <AlbumCard
                      image={album.image}
                      follows={album.follows}
                      title={album.title}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          ) : (
            <CarouselComponent albumsData={albumsData} />
          )}
        </div>
      )}

      {title === "Songs" && (
        <Filters songsData={albumsData} genresData={genresData} />
      )}
    </div>
  );
}
