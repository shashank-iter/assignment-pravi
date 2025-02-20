import {
  CalendarDaysIcon,
  UserGroupIcon,
  WalletIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

export const data = [
  {
    date: { day: "M", date: "01-Jul-2025" },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "09:05 AM - 06:35 PM",
      hours: "09:30 H",
      isLate: "ontime",
    },
    fine: "+₹500",
    oldFine: "+₹900",
    errors: [],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: { day: "T", date: "02-Jul-2025" },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "09:05 AM - 06:35 PM",
      hours: "09:30 H",
      isLate: "ontime",
    },
    fine: "+₹300",
    oldFine: "+₹500",
    errors: ["user"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: { day: "W", date: "03-Jul-2025" },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "09:10 AM - 06:20 PM",
      hours: "08:10 H",
      isLate: true,
    },
    fine: "+₹400",
    oldFine: "+₹600",
    errors: ["location"],
    calAtt: "P+WO-LT",
    finalAtt: "P+WO-LT",
  },
  {
    date: { day: "T", date: "04-Jul-2025" },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "09:10 AM - 06:20 PM",
      hours: "08:10 H",
      isLate: false,
    },
    fine: "+₹1000",
    oldFine: "+₹1200",
    errors: ["user", "location", "time"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: {
      day: "F",
      date: "05-Jul-2025",
    },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "08:59 AM - 06:29 PM",
      hours: "09:30 H",
      isLate: false,
    },
    fine: "+₹0",
    oldFine: "+₹0",
    errors: [],
    calAtt: "P+WO-LT",
    finalAtt: "P+WO-LT",
  },
  {
    date: {
      day: "M",
      date: "08-Jul-2025",
    },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "10:01 AM - 06:32 PM",
      hours: "08:31 H",
      isLate: true,
    },
    fine: "+₹500",
    oldFine: "+₹700",
    errors: ["user", "time"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: {
      day: "W",
      date: "09-Jul-2025",
    },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "10:01 AM - 06:32 PM",
      hours: "08:31 H",
      isLate: true,
    },
    fine: "+₹800",
    oldFine: "+₹1200",
    errors: ["location"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: {
      day: "F",
      date: "05-Jul-2025",
    },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "08:59 AM - 06:29 PM",
      hours: "09:30 H",
      isLate: false,
    },
    fine: "+₹0",
    oldFine: "+₹0",
    errors: [],
    calAtt: "P+WO-LT",
    finalAtt: "P+WO-LT",
  },
  {
    date: {
      day: "M",
      date: "08-Jul-2025",
    },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "10:01 AM - 06:32 PM",
      hours: "08:31 H",
      isLate: true,
    },
    fine: "+₹500",
    oldFine: "+₹700",
    errors: ["user", "time"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: { day: "T", date: "02-Jul-2025" },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "09:05 AM - 06:35 PM",
      hours: "09:30 H",
      isLate: "ontime",
    },
    fine: "+₹300",
    oldFine: "+₹500",
    errors: ["user"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
  {
    date: {
      day: "M",
      date: "08-Jul-2025",
    },
    timePlanned: "09:00 AM - 06:30 PM • 09:00 H",
    actualTime: {
      time: "10:01 AM - 06:32 PM",
      hours: "08:31 H",
      isLate: true,
    },
    fine: "+₹500",
    oldFine: "+₹700",
    errors: ["user", "time"],
    calAtt: "P-LT",
    finalAtt: "P-LT",
  },
];

export const users = [
  {
    id: 1,
    name: "Nitish Kumar",
    dept: "Team Manager | Teams Dept.",
    src: "https://www.financialexpress.com/wp-content/uploads/2020/09/NitishKumar1.jpg?w=1024",
    current: true,
  },
  {
    id: 2,
    name: "Arvind Kejriwal",
    dept: "Marketing Manager | Sales Dept.",
    src: "https://archive.aamaadmiparty.org/wp-content/uploads/2017/07/Arvind-Kejriwal-2.jpg",
    current: false,
  },
  {
    id: 3,
    name: "Yogi Adityanath",
    dept: "Compliance Manager | Complaiance Dept.",
    src: "https://uplegisassembly.gov.in/Images/yogi.jpg",
    current: false,
  },
];

export const sidebarNavigation = [
  { name: "Calender", href: "#", icon: CalendarDaysIcon, current: true },
  { name: "Users", href: "#", icon: UserGroupIcon, current: false },
  { name: "Wallet", href: "#", icon: WalletIcon, current: false },
];
export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export const links = [
  { name: "Atten. Team (Admin)", href: "/", current: false },
  {
    name: "Org. Details (Admin)",
    href: "/",
    current: false,
  },
  { name: "In/Out Logs", href: "/", current: false },
  { name: "Finalize Atten.", href: "/", current: false },
  { name: "Manage Employees", href: "/", current: false },
  { name: "Final Reports", href: "/", current: true },
  { name: "Error Reports", href: "/", current: false },
];
