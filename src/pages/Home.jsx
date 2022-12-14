import React from "react";
import Announment from "../components/Announment";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import SlideSwiper from "../components/SlideSwiper/SlideSwiper";

export default function Home() {
  return (
    <div>
      <Announment />
      <Navbar />
      <Slider />
      {/* <SlideSwiper /> */}
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}
