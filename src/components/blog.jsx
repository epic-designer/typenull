import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import sanityClient from "../clinet";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const Blog = () => {
  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"][0...3] {
        title,
        description,
        blog_content,
        slug,
        image{
          asset->{
          _id,
          url
        }
      },
        launchAt,
      }`
      )
      .then((data) => {
        setBlog(data);
        console.log(data);
        // console.log(builder.image(data[0].image).width(200).url());
      })
      .catch(console.error);
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Recent Blogs
        </h1>
        <div className="flex flex-wrap -m-4">
          {Blog.map((item) => {
            // builder.image(data[0].image).width(200).url()
            // console.log(builder.image(item.image).width(200).url());
            // console.log(item);

            return (
              <>
                <div className="p-4 md:w-1/3" key={item.slug.current}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-center flex-wrap ">
                        <NavLink
                          to=""
                          className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                        >
                          Read More
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
                        </NavLink>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K */}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                          <a className="cursor-pointer">6</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-center">
          <NavLink to="/blogs">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mt-8">
              Read more
            </button>
          </NavLink>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
