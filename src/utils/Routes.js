import AddMember from "../pages/AddMember";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event";
import FTOR from "../pages/FTOR";
import Inquiry from "../pages/Inquiry";
import JobAndHouse from "../pages/JobAndHouse";
import MemberDetails from "../pages/MemberDetails";
import Membership from "../pages/Membership";
import Payment from "../pages/Payment";

export const routes = [
  {
    title: "Dashboards",
    name: "dashboard",
    icon: "/images/home.png",
    component: <Dashboard />,
  },
  {
    title: "회원관리",
    name: "membership",
    icon: "/images/user_signout.png",
    component: <Membership />,
  },
  {
    title: "F-2-R",
    name: "f-2-r",
    icon: "/images/F2R.png",
    component: <FTOR />,
  },
  {
    title: "Job&House",
    name: "job&house",
    icon: "/images/Job&House.png",
    component: <JobAndHouse />,
  },
  {
    title: "event",
    name: "event",
    icon: "/images/lock.png",
    component: <Event />,
  },
  {
    title: "결제내역",
    name: "payments",
    icon: "/images/cart.png",
    component: <Payment />,
  },
  {
    title: "문의내역",
    name: "inquiry",
    icon: "/images/info_outline.png",
    component: <Inquiry />,
  },
];

export const editRoutes = [
  {
    title: "Add Member",
    name: "addmember",
    // icon: "/images/home.png",
    component: <AddMember />,
  },
  {
    title: "Edit Member",
    name: "memberdetails",
    // icon: "/images/home.png",
    component: <MemberDetails />,
  },
];
