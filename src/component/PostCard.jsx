import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    // <Link to={`/post/${$id}`}>
    //   <div class="xl:w-1/4 md:w-1/2 p-4">
    //     <div class="bg-gray-100 p-6 rounded-lg">
    //       <img
    //         class="h-40 rounded w-full object-cover object-center mb-6"
    //         src={featuredImage}
    //         alt="content"
    //       />
    //       <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
    //         Blog Post
    //       </h3>
    //       <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
    //         {title}
    //       </h2>
    //       <p class="leading-relaxed text-base">{parse(content)}</p>
    //     </div>
    //   </div>
    // </Link>
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6 text-justify">
      <div class="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center h-full w-full "
          src={featuredImage}
        />
      </div>
      <h2 class="text-2xl  font-medium title-font text-gray-900 mt-5 uppercase">
        {title}
      </h2>
      <p class="text-base leading-relaxed mt-2 line-clamp-3">
        {parse(content)}
      </p>
      <a
        class="text-indigo-500 inline-flex items-center mt-3"
        href={`/post/${$id}`}
      >
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default PostCard;
