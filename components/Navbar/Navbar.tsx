import { NavLinks } from "@/constants";
import Link from "next/link";
import AuthProviders from "../AuthProviders/AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <h1 className="logo text-2xl font-bold">artFlow</h1>
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? <>userPhoto share Work</> : <AuthProviders />}
      </div>
    </nav>
  );
};

export default Navbar;
