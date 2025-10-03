import React from "react";
import styles from "../styles/ItemCard.module.css";
import {useValue} from "../itemContext";

function ItemCard({ id, name, price }) {
  const {  handleAdd, handleRemove, cart } = useValue();
  // const handleAdd = (price) => {
  //   setTotal(total + price);
  //   setItem(item + 1);
  // };

  // const handleRemove = (price) => {
  //   if (total <= 0) {
  //     alert("Total amount cannot be negative");
  //     return;
  //   }
  //   setTotal((prev) => prev - price);
  //   setItem(item - 1);
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name, price})}>
          Add
        </button>
        {
          cart.find((p) => p.id === id) && cart.find((p) => p.id === id).qty > 0 ? (
           <button className={styles.itemButton} onClick={() => handleRemove({id,name, price})}>
          Remove
        </button>
          ) : ""
        }
        
      </div>
    </div>
  );
}

export default ItemCard;
