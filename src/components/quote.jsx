import React from "react";
import { useState, useEffect } from "react";
import sanityClient from "../clinet";
import { NavLink } from "react-router-dom";

const Quote = () => {
  const [Quote, setQuote] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "quote"][0...6] {
          auth_name,
          content,
          authUrl
      }`
      )
      .then((data) => {
        setQuote(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
            Quotes/Shayari
          </h1>
          <div className="flex flex-wrap -m-4">
            {Quote.map((item) => {
              return (
                <>
                  <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        AUTHOR
                      </h2>
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        {item.auth_name}
                      </h1>
                      <p className="leading-relaxed mb-3 text-left text-lg font-bold">
                        {item.content}
                      </p>

                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href={item.authUrl}
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center top-0 left-0 right-0"
                        >
                          Reach Author
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink to="/quotes">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-8">
              Read more
            </button>
          </NavLink>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </div>
      </section>
    </>
  );
};

export default Quote;
