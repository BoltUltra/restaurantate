import {
  AiOutlineShoppingCart,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { logo } from "../../public/images/homepage_images";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-background font-josefin text-[#dfdfdf]">
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-between md:py-10 py-5 md:px-40 px-5">
        <div className="underline md:order-first order-last md:mt-0 mt-5">
          <Link href={'https://twitter.com/dami0la'}>Twitter Feed</Link>
        </div>
        <Link href={"/"}>
          <Image src={logo} className="md:w-64 w-32 mx-auto" alt="Logo" />
        </Link>
        <div className="flex items-center space-x-5">
          <AiOutlineInstagram />
          <BsFacebook />
          <AiOutlineTwitter />
          <BsPinterest />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between md:pb-10 pb-5 md:space-y-0 space-y-5 md:px-40 px-5">
        <div className="md:text-left text-center space-y-5">
          <span className="uppercase border-y border-y-primary tracking-widest py-1">contact</span>
          <div>
            <p>5 Rue Dalou, 75015 Paris</p>
            <p><span className="text-primary">Call</span> - +234 906 1858 947</p>
            <p className="text-primary"><a href="mailto:mayowa77@yahoo.com">mayowa77@yahoo.com</a></p>
          </div>
        </div>
        <div className="text-center space-y-3">
          <div>
            <p>Join our mailing list for updates,</p>
            <p>Get news & offers events.</p>
          </div>
          <div className="border flex md:flex-row flex-col">
            <input type="email" name="email" id="email" placeholder="Email" className="bg-transparent px-5 py-2 outline-none" />
            <button className="bg-white px-5 text-background py-2">Subscribe</button>
          </div>
        </div>
        <div className="md:text-right text-center space-y-5">
          <span className="uppercase border-y border-y-primary tracking-widest py-1">working hours</span>
          <div>
            <p><span className="text-primary">Mon - Fri:</span> 7.00am - 6.00pm</p>
            <p><span className="text-primary">Sat:</span> 7.00am - 6.00pm</p>
            <p><span className="text-primary">Sun:</span> 8.00am - 6.00pm</p>
          </div>
        </div>
      </div>
      <div className="border-t text-center py-3">
        <p> &copy; Copyright - <a href="https://mayowasunusi.live" target="_blank" className="text-primary underline underline-offset-4">Mayowa Sunusi</a> | 2023 </p>
      </div>
    </footer>
  );
}

export default Footer;