import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Root from "./Root.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Home from "./Components/Home/Home.jsx";
import GadgetDetails from "./Components/GadgetDetails/GadgetDetails.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Gadgets from "./Components/Home/Gadgets.jsx";
import Laptops from "./Components/Home/Laptops.jsx";
import Phones from "./Components/Home/Phones.jsx";
import SmartWatches from "./Components/Home/SmartWatches.jsx";
import Macbooks from "./Components/Home/Macbooks.jsx";
import Iphones from "./Components/Home/Iphones.jsx";
import Carts from "./Components/Dashboard/Carts.jsx";
import Wishlists from "./Components/Dashboard/Wishlists.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: () => fetch("/data.json"),
    children: [
      {
        path: "/",
        Component: Home,
        children: [
          {
            index: true,
            Component: Gadgets,
          },
          {
            path: "gadgets",
            Component: Gadgets,
          },
          {
            path: "laptops",
            Component: Laptops,
            loader: () => fetch("/data.json"),
          },
          {
            path: "phones",
            Component: Phones,
            loader: () => fetch("/data.json"),
          },

          {
            path: "smart-watches",
            Component: SmartWatches,
            loader: () => fetch("/data.json"),
          },
          {
            path: "macbooks",
            Component: Macbooks,
            loader: () => fetch("/data.json"),
          },
          {
            path: "iphones",
            Component: Iphones,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "statistics",
        Component: Statistics,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          {
            index: true,
            element: <Navigate to="cart" replace />,
          },
          {
            path: "cart",
            Component: Carts,
          },
          {
            path: "wishlist",
            Component: Wishlists,
          },
        ],
      },
      {
        path: ":id",
        loader: () => fetch("/data.json"),
        Component: GadgetDetails,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
