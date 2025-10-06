import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "./Components/Footer/Footer";
export const GadgetsContext = createContext([]);
export const HandleAddToCartContext = createContext(() => {});
export const AddToCartContext = createContext([]);
export const TotalPriceContext = createContext();
export const HandleRemoveFromCartContext = createContext(() => {});
export const HandleAddToFavContext = createContext(() => {});
export const IsFavoriteContext = createContext();
export const AddToFavContext = createContext();
export const HandleRemoveFromFavContext = createContext(() => {});
const Root = () => {
  let totalPrice = 0;
  const gadgets = useLoaderData();
  const [addToCart, setAddToCart] = useState([]);
  const [addToFav, setAddToFav] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  addToCart.forEach((cart) => (totalPrice += cart.price));
  const handleAddToCart = (data) => {
    const available = addToCart.find(
      (cart) => cart.product_id === data.product_id
    );
    if (!available) {
      setAddToCart([...addToCart, data]);

      alert("added to cart");
    } else {
      alert("already added");
    }
  };
  const handleRemoveFromCart = (data) => {
    setAddToCart(
      addToCart.filter((cart) => cart.product_id !== data.product_id)
    );
    alert("Removed From Cart");
  };

  const handleAddToFav = (data) => {
    const available = addToFav.find(
      (fav) => fav.product_id === data.product_id
    );
    if (!available) {
      setAddToFav([...addToFav, data]);
      alert("Added To Wishlist");
      setIsFavorite(true);
    } else {
      alert("Already Available");
    }
  };
  const handleRemoveFromFav = (data) => {
    setAddToFav(addToFav.filter((fav) => fav.product_id !== data.product_id));
    setIsFavorite(false);
    alert("removed from fav");
  };
  return (
    <div>
      <Header />

      <HandleRemoveFromFavContext value={handleRemoveFromFav}>
        <AddToFavContext value={addToFav}>
          <IsFavoriteContext value={isFavorite}>
            <HandleAddToFavContext value={handleAddToFav}>
              <HandleRemoveFromCartContext value={handleRemoveFromCart}>
                <TotalPriceContext value={totalPrice}>
                  <AddToCartContext value={addToCart}>
                    <HandleAddToCartContext value={handleAddToCart}>
                      <GadgetsContext value={gadgets}>
                        <Outlet />
                      </GadgetsContext>
                    </HandleAddToCartContext>
                  </AddToCartContext>
                </TotalPriceContext>
              </HandleRemoveFromCartContext>
            </HandleAddToFavContext>
          </IsFavoriteContext>
        </AddToFavContext>
      </HandleRemoveFromFavContext>

      <Footer />
    </div>
  );
};

export default Root;
