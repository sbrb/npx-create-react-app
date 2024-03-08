import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
    value: "30000",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [35, 45, 25, 55, 45, 95, 105],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(#90f5a9 -146.42%, #8efaa9 -46.42%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 66.6,
    value: "20000",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [15, 105, 40, 74, 90, 20, 45],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    
    barValue: 40,
    value: "8000",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [13, 35, 25, 40, 22, 18, 27],
      },
    ],
  },
];


export const UpdatesData = [
  {
    id: 1,
    img: img1,
    name: "Narendra Modi",
    noti: "has ordered Apple smart watch 3500mh battery.",
    time: "15 seconds ago",
  },
  {
    id: 2,
    img: img2,
    name: "Yogi Adityanath",
    noti: "has received Apple gadget for charging battery.",
    time: "50 minutes ago",
  },
  {
    id: 3,
    img: img3,
    name: "Amit Shah",
    noti: "has ordered Samsung smart watch, Apple Gear 2500mh battery.",
    time: "3 hours ago",
  },
];
