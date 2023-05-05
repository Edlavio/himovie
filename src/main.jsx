import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Search from "./pages/Search/Search";
import ErrorPage from "./pages/Error/Error";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#77767b" highlightColor="#c0bfbc">
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </SkeletonTheme>
);
