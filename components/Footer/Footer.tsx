import React from "react";
import Link from "next/link";

const FooterColumn = () => (
  <div className="footer-column">
    <h4 className="font-semibold">Title</h4>
    <ul className="flex flex-col gap-2 font-normal"></ul>
  </div>
)

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <Link href="/">
          <h1 className="logo text-2xl font-bold">artFlow</h1>
        </Link>
        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          artFlow is the world's leading community for creative to share, grow
          and get hired.
        </p>
      </div>
      <FooterColumn />
    </footer>
  );
};

export default Footer;
