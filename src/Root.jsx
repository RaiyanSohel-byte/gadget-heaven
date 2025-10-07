import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "./Components/Footer/Footer";
import Swal from "sweetalert2";

export const GadgetsContext = createContext([]);
export const HandleAddToCartContext = createContext(() => {});
export const AddToCartContext = createContext([]);
export const TotalPriceContext = createContext();
export const HandleRemoveFromCartContext = createContext(() => {});
export const HandleAddToFavContext = createContext(() => {});
export const IsFavoriteContext = createContext();
export const AddToFavContext = createContext();
export const HandleRemoveFromFavContext = createContext(() => {});
export const SetAddToCartContext = createContext(() => {});

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
      Swal.fire({
        title: `${data.product_title} Added To Cart`,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: `Already Added`,
        icon: "warning",
      });
    }
  };
  const handleRemoveFromCart = (data) => {
    setAddToCart(
      addToCart.filter((cart) => cart.product_id !== data.product_id)
    );
    Swal.fire({
      title: `${data.product_title} Removed From cart`,
      icon: "error",
    });
  };

  const handleAddToFav = (data) => {
    const available = addToFav.find(
      (fav) => fav.product_id === data.product_id
    );
    if (!available) {
      setAddToFav([...addToFav, data]);
      Swal.fire({
        title: `${data.product_title} Added To Wishlist`,
        icon: "success",
      });
      setIsFavorite(true);
    } else {
      Swal.fire({
        title: `Already Added`,
        icon: "warning",
      });
    }
  };
  const handleRemoveFromFav = (data) => {
    setAddToFav(addToFav.filter((fav) => fav.product_id !== data.product_id));
    setIsFavorite(false);
    Swal.fire({
      title: `${data.product_title} Removed From Wishlist`,
      icon: "error",
    });
  };
  return (
    <div>
      <Header />

      <SetAddToCartContext value={setAddToCart}>
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
      </SetAddToCartContext>

      <Footer />
    </div>
  );
};

export default Root;
