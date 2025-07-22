import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { FetchAllArticles } from "../libs/FetchAllArticles.js";

import HeroText from "./HeroText.jsx";
import Header from "./Header.jsx";
import ArticleCard from "./ArticleCard.jsx";

function App() {
  useEffect(() => {
    const BlogArticles = FetchAllArticles();
  });
  return (
    <div>
      <Header />
      <HeroText />
      {/* <ArticleCard /> this guy will be passed props and the blanks will be filled with the data that came from the backend */}
    </div>
  );
}

export default App;
