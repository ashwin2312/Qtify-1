import React, { useState } from "react";
import { Box, Tab, Tabs, AppBar } from "@mui/material";
import styles from "./Filters.module.css";
import CarouselComponent from "../Carousel/CarouselComponent";

export default function Filters({ songsData, genresData }) {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn("Tabs changed", val);
    setValue(val);
  };
  console.log("songs::", songsData);
  console.log("genres::", genresData);

  return (
    <div>
      <Box sx={{ color: "black", bgcolor: "white" }}>
        <Tabs
          value={value}
          onChange={handleTabs}
          // textColor="inherit"
          sx={{
            marginRight: "auto",
            "& button:hover": { backgroundColor: "black", color: "white" },
          }}
          className={styles.tabColor}
          indicatorColor="secondary"
        >
          {genresData.map((data, index) => {
            <Tab label={`${data.label}`} sx={{ color: "black" }} key={index} />;
            {
              console.log("tab list rendered", data.label);
            }
          })}
          {/* <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" /> */}
        </Tabs>

        <TabPanel value={value} index={0}>
          Item 1 Detail
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item 2 Detail
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item 3 Detail
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item 4 Detail
        </TabPanel>
      </Box>
      <CarouselComponent albumsData={songsData} />
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value == index && <h1>{children}</h1>}</div>;
}
