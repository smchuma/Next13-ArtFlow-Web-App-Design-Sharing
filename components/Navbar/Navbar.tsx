import { NavLinks } from "@/constants";
import Link from "next/link";
import AuthProviders from "../AuthProviders/AuthProviders";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";

const Navbar = async () => {
  const session = await getCurrentUser();
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
        {session?.user ? <>
        {session?.user.image && (
          <Image
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
          alt={session.user.name}
          />
        )}
        </> : <AuthProviders />}
      </div>
    </nav>
  );
};

export default Navbar;
