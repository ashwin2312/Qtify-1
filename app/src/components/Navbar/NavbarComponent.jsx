import React from "react";
import styles from "./Navbar.module.css";
import NavbarIcon from "../Icons/NavbarIcon";
import SearchbarComponent from "../Searchbar/SearchbarComponent";
import ButtonComponent from "../Button/ButtonComponent";

export default function NavbarComponent() {
  return (
    <div
      className={styles.navbar}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <NavbarIcon />
        <SearchbarComponent />
        <ButtonComponent text="Send Feedback" />
      </div>
    </div>
  );
}
