import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="text-4xl font-bold ">
          Explore the world’s <br /> leading design portfolios
        </h1>
        <p className="mt-4">
          Millions of designers and agencies around the world showcase their
          portfolio work on Dribbble - the home to the world’s best design and
          creative professionals.
        </p>
        <input
          placeholder="search"
          className="p-3 px-5 mt-8 outline-none text-black rounded-full w-[550px]"
        />
      </div>
    </section>
  );
};

export default Banner;
