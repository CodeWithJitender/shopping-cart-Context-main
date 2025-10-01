import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomProvider from "./itemContext";


function App() {
  return (
     <CustomProvider>
       <div className="App">
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
    </CustomProvider>
  );
}
export default App;
