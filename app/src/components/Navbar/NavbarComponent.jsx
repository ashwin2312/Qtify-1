import React from "react";
import styles from "./Navbar.module.css";
import NavbarIcon from "../Icons/NavbarIcon";
import SearchbarComponent from "../Searchbar/SearchbarComponent";
import ButtonComponent from "../Button/ButtonComponent";

export default function NavbarComponent() {
  return (
    <div className={styles.navbar}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            // border: "2px solid black",
            position: "absolute",
            left: "32px",
          }}
        >
          <NavbarIcon />
        </div>
        <div
          style={{
            // border: "2px solid black",
            position: "absolute",
            left: "550px",
          }}
        >
          <SearchbarComponent />
        </div>
        <div
          style={{
            // border: "2px solid black",
            position: "absolute",
            right: "32px",
          }}
        >
          <ButtonComponent text="Send Feedback" />
        </div>
      </div>
    </div>
  );
}
