import { createContext, useContext, useState } from "react";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      alert("Total amount cannot be negative");
      return;
    }
    setTotal((prev) => prev - price);
    setItem(item - 1);
  };
  const reset = () => {
    setTotal(0);
    setItem(0);
  }

  return (
    <itemContext.Provider value={{ item, setItem, total, setTotal, handleAdd, handleRemove, reset }}>
      {children}
    </itemContext.Provider>
  );
}
export { itemContext, useValue };
export default CustomProvider;
