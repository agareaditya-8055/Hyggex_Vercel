import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/header/home/Home";
import FlashCard from "./components/header/flashcard/FlashCard";
import Contact from "./components/header/contact/Contact";

import Mathematics from "./components/header/flashcard/mathematics/Mathematics";
import Relation from "./components/header/flashcard/mathematics/relation/Relation";
import About from "./components/header/about/About";

const show = ReactDOM.createRoot(document.getElementById("root"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flashcard",
        element: <FlashCard />,
      },
      {
        path: "/flashcard/:subject",
        element: <Mathematics />,
      },
      {
        path: "/flashcard/:subject/:topic",
        element: <Relation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <About />,
      },
    ],
  },
]);

show.render(<RouterProvider router={appRoute} />);
