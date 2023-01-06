// import { useState } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/UI/HeroSection/HeroSection";
import OrderSection from "./components/UI/OrderSection/OrderSection";
import CartModal from "./components/UI/Modals/CartModal";
import { useState } from "react";
import { nanoid } from "nanoid";
const orderItems = [
  {
    id: nanoid(),

    orderTitle: "Sushi",
    orderDescription: "Finest fish and veggies",
    orderPrice: 22.99,
  },
  {
    id: nanoid(),

    orderTitle: "Egg Rolls",
    orderDescription: "Crunchy Rolls",
    orderPrice: 2.99,
  },
];

const cartItems = [
  {
    id: nanoid(),
    cartItemName: "Sushi",
    cartItemQuantity: 5,
    cartItemPrice: 22.99,
  },
  {
    id: nanoid(),
    cartItemName: "Egg Rolls",
    cartItemQuantity: 4,
    cartItemPrice: 1.99,
  },
];
function App() {
  const [cart, setCart] = useState({ cartItems: [], cartTotal: 0 });
  const [cartModal, setCartModal] = useState(false);
  return (
    <div className={styles.App}>
      <CartModal
        cart={cart}
        setCart={setCart}
        cartModal={cartModal}
        setCartModal={setCartModal}
      />
      <Header cartModal={cartModal} setCartModal={setCartModal} />
      <HeroSection />
      <OrderSection orderItems={orderItems} setCart={setCart} cart={cart} />
    </div>
  );
}

export default App;
