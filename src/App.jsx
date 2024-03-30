import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Banner from "./Components/Banner/Banner.";
import Categories from "./Components/Categories/Categories";
import Jobs from "./Components/Jobs/Jobs";
import Banner2 from "./Components/BannerTwo/BannerTwo";

function App() {
    return (
        <>
        <NavBar />
        <SearchBar />
        <Banner />
        <Categories />
        <Banner2 />
        <Jobs />
        </>
    )
}

export default App;
