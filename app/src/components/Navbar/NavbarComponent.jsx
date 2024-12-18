import React from "react";
import ButtonComponent from "./ButtonComponent";
import styles from "./Navbar.module.css";
import SearchbarComponent from "./SearchbarComponent";
import NavbarIcon from "../Icons/NavbarIcon";

export default function NavbarComponent() {
  return (
    <div
      className={styles.navbar}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "96%",
        }}
      >
        <NavbarIcon />
        <SearchbarComponent />
        <ButtonComponent />
      </div>
    </div>
  );
}
