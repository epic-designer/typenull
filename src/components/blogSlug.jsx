// src/components/OnePost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../clinet";
import imageUrlBuilder from "@sanity/image-url";
// import BlockContent from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(sanityClient);

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
            description,
            blog_content,
            slug,
            image,
            launchAt,
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src=""
            // {builder.image(postData.image).width(200).url()}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {postData.title}
            </h1>
            <div className="mb-8 leading-relaxed">
              <BlockContent
                blocks={postData.description}
                projectId={sanityClient.projectId}
                dataset={sanityClient.dataset}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
