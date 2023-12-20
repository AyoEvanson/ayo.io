import React from "react";
import { getSortedPostsData, getPostCategories } from "../lib/blog";

export default function Blog() {
  let postdata = getSortedPostsData();
  let categories = getPostCategories();

  return (
    <>
      <section className="grid grid-cols-3">
        {categories.map((cat) => (
          <div className="col-span-1 mt-4 text-xl text-center items-center text-white">
            {cat}
          </div>
        ))}
      </section>
    </>
  );
}
