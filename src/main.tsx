import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Challenge from "@components/Modes/Challenge/Challenge.tsx";

import Review from "@components/Modes/Review/Review.tsx";
import Layout from "@components/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "challenge",
        element: <Challenge />,
      },
      {
        path: "/",
        element: <Review />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
