import React from "react";
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import {RecentWork} from "./pages/RecentWork";
import {PricingPlan} from "./pages/PricingPlan";

import "./App.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recentwork",
    element: <RecentWork />,
  },
  {
    path: "/pricingplan",
    element: <PricingPlan />,
  }
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>     
  );
}
