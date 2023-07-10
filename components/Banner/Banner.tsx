const Banner = async () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="text-4xl font-bold mb-4 ">ArtFlow Designs</h1>
        <h1 className="text-2xl font-normal ">
          Explore the world’s leading design portfolios
        </h1>
        <p className="mt-4">
          artFlow is the world’s leading community for creatives to share, grow,
          and get hired.
        </p>
        <input
          placeholder="search"
          className="p-3 px-5 mt-8 outline-none text-black rounded-full w-[80%]"
        />
      </div>
    </section>
  );
};

export default Banner;
