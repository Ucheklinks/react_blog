import { useState } from "react";
import { ShowBlogArticles } from "./ShowBlogArticles.jsx";
import "./App.css";
import { useEffect } from "react";
import { Layout } from "../pages/Layout.jsx";
import { About } from "../pages/About.jsx";
import { Home } from "../pages/Home.jsx";
import { Routes, Route } from "react-router";
import { Contact } from "../pages/Contact.jsx";
import { SignedIn } from "../pages/SignedIn.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Auth" element={<SignedIn />} />
      </Route>
    </Routes>
  );
}

export default App;
