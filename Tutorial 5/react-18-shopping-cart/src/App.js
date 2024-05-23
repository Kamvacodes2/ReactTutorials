import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from './data';
import { useState } from "react";


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist + 1 } : x);
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems)
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x)=> x.id === product.id? {...exist, qty: exist.qty - 1 }: x);
    }
  }

  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
