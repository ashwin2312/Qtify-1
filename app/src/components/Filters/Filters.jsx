import React, { useState } from "react";
import { Box, Tab, Tabs, AppBar } from "@mui/material";
import styles from "./Filters.module.css";

export default function Filters() {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn("Tabs changed", val);
    setValue(val);
  };
  return (
    <div>
      <Box sx={{ color: "black", bgcolor: "white" }}>
        {/* <AppBar position="static"> */}
        <Tabs
          value={value}
          onChange={handleTabs}
          textColor="secondary"
          sx={{ color: "white" }}
          // className={styles.tabColor}
        >
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
        </Tabs>
        {/* </AppBar> */}
        <TabPanel value={value} index={0}>
          Item 1 Detail
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item 2 Detail
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item 3 Detail
        </TabPanel>
      </Box>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value == index && <h1>{children}</h1>}</div>;
}
