import AddMember from "../pages/AddMember";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event";
import F2RSupportList from "../pages/F2RSupportList";
import FTOR from "../pages/F2R";
import Inquiry from "../pages/Inquiry";
import JobAndHouse from "../pages/JobAndHouse";
import MemberDetails from "../pages/MemberDetails";
import Membership from "../pages/Membership";
import Payment from "../pages/Payment";
import InquiryDetails from "../pages/InquiryDetails";

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
    name: "f_2_r",
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
    name: "add_member",
    component: <AddMember />,
  },
  {
    title: "Edit Member",
    name: "member_details",
    component: <MemberDetails />,
  },
  {
    title: "Inquiry Details",
    name: "inquiry_details",
    component: <InquiryDetails />,
  },
  {
    title: "F-2-R Support List",
    name: "f_2_r_support_list",
    component: <F2RSupportList />,
  },
];
