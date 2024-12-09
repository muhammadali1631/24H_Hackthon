import tshirt from "@/images/tshirt1.png";
import pant from "@/images/pant1.png";
import shirt from "@/images/shirt.png";
import tshirt2 from "@/images/tshirt2.png";
import tshirt3 from '@/images/tshirt3.png'
import tshirt4 from '@/images/image 8.png'
import shirt2 from '@/images/shirt2.png'
import short from '@/images/short.png'
import pant2 from '@/images/pant2.png'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";


export const products = [
  {

    id:1,
    name: 'T-Shirt',
    slug: 't-shirt-with-tape-details',
    image: tshirt,
    title: "T-shirt with Tape Details",
    stars: Array(4).fill(FaStar),
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    halfStar: FaStarHalf,
    review: 4.5,
    outOf: "/5",
    price: "$120",
    tags: ['new'],
    link: 'shop/t-shirt-with-tape-details'
  },
  {
    id:2,
    image: pant,
    name: 'Jeans',
    title: "Skinny Fit Jeans",
    slug: 'skinny-fit-jeans',
    stars: Array(3).fill(FaStar),
    halfStar: FaStarHalf,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    review: 3.5,
    outOf: "/5",
    price: "$240",
    orignalPrice: "$260",
    discount: "-20%",
    tags: ['new', 'cart'],
    link: 'shop/skinny-fit-jeans',
    size: 'Large',
    color: 'Blue'

  },
  {
    id:3,
    image: shirt,
    name: 'Shirt',
    title: "Checkered Shirt",
    slug: 'checkered-shirt',
    stars: Array(4).fill(FaStar),
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    halfStar: FaStarHalf,
    review: 4.5,
    outOf: "/5",
    price: "$180",
    tags: ['new', 'cart'],
    link: 'shop/checkered-shirt',
    size: 'Medium',
    color: 'Red'
  },
  {
    id:4,
    image: tshirt2,
    name: 'T-Shirt',
    title: "Sleeve Striped T-shirt",
    slug: 'sleeve-striped-t-shirt',
    stars: Array(4).fill(FaStar),
    halfStar: FaStarHalf,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    review: 4.5,
    outOf: "/5",
    price: "$130",
    orignalPrice: "$160",
    discount: "-30%",
    tags: ['new'],
    link: 'shop/sleeve-striped-t-shirt'
  },
  {
    id:5,
    image: shirt2,
    name: 'Shirt', 
    title: "Vertical Striped Shirt",
    slug: 'vertical-striped-shirt',
    stars: Array(5).fill(FaStar),
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    review: "5.0",
    outOf: "/5",
    price: "$212",
    orignalPrice: "$232",
    discount: "-20%",
    tags: ['best'],
    link: 'shop/vertical-striped-shirt'
  },
  {
    id:6,
    image: tshirt3,
    name: 'T-Shirt',
    title: "Courage Graphic T-shirt",
    slug: 'courage-graphic-t-shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    stars: Array(4).fill(FaStar),
    review: "4.0",
    outOf: "/5",
    price: "$145",
    tags: ['best'],
    link: 'shop/courage-graphic-t-shirt'
  },
  {
    id:7,
    image: short,
    name: 'Shorts',
    title: "Loose Fit Bermuda Shorts",
    slug: 'loose-fit-bermuda-shorts',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    stars: Array(3).fill(FaStar),
    review: "3.0",
    outOf: "/5",
    price: "$80",
    tags: ['best'],
    link: 'shop/loose-fit-bermuda-shorts'
  },
  {
    id:8,
    image: pant2,
    name: 'Jeans',
    title: "Faded Skinny Jeans",
    slug: 'faded-skinny-jeans',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    stars: Array(4).fill(FaStar),
    halfStar: FaStarHalf,
    review: "4.5",
    outOf: "/5",
    price: "$210",
    tags: ['best'],
    link: 'shop/faded-skinny-jeans'
  },
  {
    id:8,
    image: tshirt4,
    name: 'T-shirt',
    title: "Gradient Graphic T-shirt",
    slug: 'gradient-graphic-t-shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat doloribus recusandae consequatur possimus minus.',
    stars: Array(3).fill(FaStar),
    halfStar: FaStarHalf,
    review: "3.5",
    outOf: "/5",
    price: "$145",
    tags: ['best', 'cart'],
    link: 'shop/gradient-graphic-t-shirt',
    size: 'Large',
    color: 'White'
  },
];
