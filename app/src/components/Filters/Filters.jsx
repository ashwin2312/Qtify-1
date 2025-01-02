import React, { useState } from "react";
import { Box, Tab, Tabs, AppBar } from "@mui/material";
import { purple, lightGreen } from "@mui/material/colors";
import styles from "./Filters.module.css";
import CarouselComponent from "../Carousel/CarouselComponent";

export default function Filters({ songsData, genresData }) {
  const [value, setValue] = useState(0);

  const rockSongs = songsData.filter((songs) => songs.genre.label === "Rock");
  const jazzSongs = songsData.filter((songs) => songs.genre.label === "Jazz");
  const popSongs = songsData.filter((songs) => songs.genre.label === "Pop");
  const bluesSongs = songsData.filter((songs) => songs.genre.label === "Blues");

  const tabsSx = {
    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      // same as: textColor
      color: "white",
    },
    "& .MuiTabs-indicator": {
      // same as: indicatorColor
      backgroundColor: "lightgreen",
    },
  };

  // const primary = lightGreen[400];

  const handleTabs = (e, val) => {
    // console.warn("Tabs changed", val);
    setValue(val);
  };
  // console.log("songs::", songsData);
  // console.log("genres::", genresData);

  return (
    <div>
      <Box sx={{ color: "white", bgcolor: "black" }}>
        <Tabs
          value={value}
          onChange={handleTabs}
          textColor="inherit"
          sx={tabsSx}
        >
          <Tab label="All" />
          <Tab label="Rock" />
          <Tab label="Pop" />
          <Tab label="Jazz" />
          <Tab label="Blues" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <CarouselComponent albumsData={songsData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CarouselComponent albumsData={rockSongs} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CarouselComponent albumsData={popSongs} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CarouselComponent albumsData={jazzSongs} />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <CarouselComponent albumsData={bluesSongs} />
        </TabPanel>
      </Box>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <>{value == index && <div style={{ marginTop: "15px" }}>{children}</div>}</>
  );
}
