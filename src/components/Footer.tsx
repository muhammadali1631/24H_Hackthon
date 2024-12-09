import Image from "next/image";
import React from "react";
import logo from '@/images/logo.png'
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Links from "./Links";
import visa from '@/images/visa.png'
import master from '@/images/master.png'
import paypal from '@/images/paypal.png'
import applepay from '@/images/applepay.png'
import googlepay from '@/images/googlepay.png'
import Email from "./Email";

const images = [visa, master, paypal, applepay, googlepay]
const company = {heading: "COMPANY", Links: ['About', 'Features', 'Works', 'Career']}
const help = {heading: "HELP", Links: ['Customer Support', 'Delivey Details', 'Terms & Consditions', 'Privacy Policy']}
const faq = {heading: "FAQ", Links: ['Account', 'Manage Deliveries', 'Orders', 'Payments']}
const resource = {heading: "RESOURCE", Links: ['Free eBooks', 'Developments Tutorial', 'How to - Blog', 'YouTube Playlist']}

const Footer = () => {
  return (
    <footer className="bg-[#F2F0F1] relative mt-48 md:mt-28">
        <Email/>
    <div className="py-20 pt-44 md:pt-32 px-16 flex flex-wrap gap-6  justify-around">
      <div className="w-[300px] space-y-7">
        <Image src={logo} alt="Logo"/>
        <p className="text-gray-500">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
        <div className="flex gap-2">
            <FaTwitter className="h-10 w-10 p-[10px] border-[1px] rounded-full bg-white"/>
            <FaFacebookF className="h-10 w-10 p-[10px] border-[1px] rounded-full bg-black text-white"/>
            <IoLogoInstagram className="h-10 w-10 p-[10px] border-[1px] rounded-full bg-white"/>
            <FaGithub className="h-10 w-10 p-[10px] border-[1px] rounded-full bg-white"/>
        </div>
      </div>
      <Links props={company}/>
      <Links props={help}/>
      <Links props={faq}/>
      <Links props={resource}/>
    </div>
    <div className="h-[2px] bg-gray-200 "></div>
    <div className="py-4 px-0 sm:px-16 flex justify-between items-center flex-wrap">
        <p>Shop.co  2000-2003. All Right Reserved</p>
        <div className="flex overflow-x-hidden">
        {images.map((image, index)=>(
            <Image key={index} src={image} alt="icon"/>
        ))}
        </div>
    </div>
    </footer>
  );
};

export default Footer;