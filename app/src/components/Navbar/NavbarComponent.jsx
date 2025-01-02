import React from "react";
import styles from "./Navbar.module.css";
import NavbarIcon from "../Icons/NavbarIcon";
import SearchbarComponent from "../Searchbar/SearchbarComponent";
import ButtonComponent from "../Button/ButtonComponent";

export default function NavbarComponent() {
  return (
    <div className={styles.navbarContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          width: "100%",
          
        }}
      >
        <div
          style={{
            marginLeft: "32px",
            marginTop: "10px",
            marginBottom: "10px",
            border: "1px solid black",
          }}
        >
          <NavbarIcon />
        </div>
        <div style={{ margin: "auto" }}>
          <SearchbarComponent />
        </div>
        <div
          style={{
            marginRight: "32px",
          }}
        >
          <ButtonComponent text="Give Feedback" />
        </div>
      </div>
    </div>
  );
}
