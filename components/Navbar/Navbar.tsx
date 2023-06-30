import { NavLinks } from "@/constants";
import Link from "next/link";
import AuthProviders from "../AuthProviders/AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flex navbar">
      <div className=" flex-1 flexBetween">
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" flex-1 flexCenter">
        {" "}
        <Link href="/">
          <h1 className="logo text-2xl font-bold">artFlow</h1>
        </Link>
      </div>
      <div className="flex-1 flex justify-end gap-4">
        {session ? <>userPhoto share Work</> : <AuthProviders />}
      </div>
    </nav>
  );
};

export default Navbar;
