import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import sanityClient from "../clinet";
import imageUrlBuilder from "@sanity/image-url";


const Hero = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <>
          <div
            key="1"
            className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          >
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Hello,
                <br className="hidden lg:inline-block" />
                Welcome to Type Null
              </h1>
              <p className="mb-8 leading-relaxed">
                The Public blog website which is specially for writeres and
                content creators.Here you can upload your stories,Quotes/Shayari
                or Blogs.If we find it good we will feature it to our very own
                Website.
              </p>
              <div className="flex justify-center">
                <NavLink to="/contact">
                  <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Submit Stuff
                  </button>
                </NavLink>
                <NavLink to="blogs">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Read Blogs
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="blog.jpg"
              />
            </div>
          </div>
        </>
      </section>
    </div>
  );
};
export default Hero;
