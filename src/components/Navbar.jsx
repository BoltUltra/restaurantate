import {
  AiOutlineShoppingCart,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { logo } from "../../public/images/homepage_images";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Menu", link: "/menu" },
    { title: "Reservation", link: "/reservation" },
    { title: "Gallery", link: "/gallery" },
    { title: "Blog", link: "/blog" },
  ];

  const toggle =()=>{
    setIsNavOpen(!isNavOpen)
  };  

  return (
    <nav className="bg-background font-josefin text-[#dfdfdf]">
      <div className="md:flex items-center justify-between md:px-40 px-5 md:py-10 py-5">
        <div className="md:block hidden border border-primary px-5 py-2">
          Call - +234 906 1858 947
        </div>
        <Link href={"/"}>
          <Image src={logo} className="md:w-64 w-32 mx-auto" />
        </Link>
        <div className="md:flex hidden items-center space-x-3">
          <AiOutlineShoppingCart className="text-2xl" />
          <PrimaryButton title={"Reservation"} link={"/reservation"} />
        </div>
      </div>
      <div className="border-y border-y-[#5C6168] md:flex items-center justify-between hidden px-40 py-5">
        <div className="space-x-16">
          {navlinks.map((link, index) => (
            <Link href={link.link} key={index}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-5">
          <AiOutlineInstagram />
          <BsFacebook />
          <AiOutlineTwitter />
          <BsPinterest />
        </div>
      </div>
      <button className="md:hidden fixed top-20 right-0 z-20" onClick={toggle}>
        {isNavOpen ? <MdClose className="text-4xl bg-primary rounded-l dark:text-background p-1"/> : <MdOutlineMenuOpen className="text-4xl p-1 bg-primary rounded-l dark:text-background"/>}
      </button>

      <div className={`${isNavOpen ? "md:hidden block" : "md:hidden hidden"} fixed top-0 h-screen z-10 bg-background w-full p-5 space-y-5`}>
        <Link href={"/"}>
          <Image src={logo} className="md:w-64 w-32" />
        </Link>
        <div className="flex flex-col space-y-5">
          {navlinks.map((link, index) => (
            <Link href={link.link} key={index} onClick={toggle}>{link.title}</Link>
          ))}
        </div>
        <div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
