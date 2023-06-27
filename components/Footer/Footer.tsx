import React from "react";
import Link from "next/link";
import { footerLinks } from "@/constants";

type columnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: columnProps) => (
  <div className="footer-column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href={link} key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className=" h-[100vh] flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex pt-10 flex-wrap gap-12">
          <Link href="/">
            <h1 className="logo  text-3xl text-center font-bold">artFlow</h1>
            <p className="text-start text-sm font-normal max-w-xs">
              artFlow is the world’s leading community for creatives to share,
              grow, and get hired.
            </p>
          </Link>
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
          </div>
        </div>
      </div>
      <div className="flexBetween border-t-2 border-t-[#2b2b30] footer_copyright">
        <p className="mt-2" >@2023 artFlow. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
