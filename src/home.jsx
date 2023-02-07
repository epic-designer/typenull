import React from "react";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Quote from "./components/quote";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Blog /> */}
      <Quote />
      <Contact />
    </>
  );
};

export default Home;
