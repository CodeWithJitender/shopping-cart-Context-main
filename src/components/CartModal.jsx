import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {
  const { reset, toggleCart } = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={reset}>
        Clear
      </div>
      <div className={styles.itemContainer}></div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
