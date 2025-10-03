import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (pro) => {
    /*   setTotal(total + price);
    setItem(item + 1);
    setCart([...cart, { id, name, price }]); */
    if (cart.find((p) => p.id === pro.id)) {
      setCart(
        cart.map((p) => (p.id === pro.id ? { ...p, qty: p.qty + 1 } : p))
      );
      setTotal(total + pro.price);
      setItem(item + 1);
    } else {
      setCart([...cart, { ...pro, qty: 1 }]);
       setTotal(total + pro.price);
      setItem(item + 1);
    }
  };
  console.log(cart);

  const handleRemove = (pro) => {
    if (total <= 0) {
      alert("Total amount cannot be negative");
      return;
    }
    if (cart.find((p) => p.id === pro.id)) {
      if (cart.find((p) => p.id === pro.id).qty === 1) {
        setCart(cart.filter((p) => p.id !== pro.id));
        setTotal((prev) => prev - pro.price);
        setItem(item - 1);
      } else {
        setCart(
          cart.map((p) => (p.id === pro.id ? { ...p, qty: p.qty - 1 } : p))
        );
        setTotal(total - pro.price);
        setItem(item - 1);
      }
    }
  };
  const reset = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <itemContext.Provider
      value={{
        item,
        setItem,
        total,
        setTotal,
        handleAdd,
        handleRemove,
        reset,
        toggleCart,
        cart,
      }}
    >
      {children}
      {showCart && <CartModal />}
    </itemContext.Provider>
  );
}
export { itemContext, useValue };
export default CustomProvider;
