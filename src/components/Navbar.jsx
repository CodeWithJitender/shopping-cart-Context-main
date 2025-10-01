import React from "react";
import styles from "../styles/Total.module.css";
import navbar from "../styles/Navbar.module.css";
import { itemContext, useValue } from "../itemContext";

function Navbar() {
  const { item, total, reset } = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item} </h1>
      <div className={navbar.buttonsWrapper}>
        <button className={navbar.button} onClick={reset}>
          Cart
        </button>
        <button className={navbar.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
