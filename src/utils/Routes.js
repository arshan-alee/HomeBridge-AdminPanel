import AddMember from "../pages/AddMember";
import Dashboard from "../pages/Dashboard";
import F2RSupportList from "../pages/F2RSupportList";
import FTOR from "../pages/F2R";
import Inquiry from "../pages/Inquiry";
import MemberDetails from "../pages/MemberDetails";
import Membership from "../pages/Membership";
import Payment from "../pages/Payment";
import InquiryDetails from "../pages/InquiryDetails";
import EventRegistration from "../pages/EventRegistration";
import EventApplicationList from "../pages/EventApplicationList";
import EventApplicationDetails from "../pages/EventApplicationDetails";
import PaymentDetails from "../pages/PaymentDetails";
import EventList from "../pages/EventList";
import Job_House_Announcement from "../pages/Job_House_Announcement";
import Job_House_Support from "../pages/Job_House_Support";
import JobAndHouseSupportDetails from "../pages/JobAndHouseSupportDetails";
import AnnouncementRegisteration from "../pages/AnnouncementRegisteration";

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
    name: "job_house_announcement",
    icon: "/images/Job&House.png",
    component: <Job_House_Announcement />,
  },
  {
    title: "Job&House",
    name: "job_house_support",
    icon: "/images/Job&House.png",
    component: <Job_House_Support />,
  },
  {
    title: "Event list",
    name: "event_list",
    icon: "/images/lock.png",
    component: <EventList />,
  },
  {
    title: "event",
    name: "event_application_list",
    icon: "/images/lock.png",
    component: <EventApplicationList />,
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
    name: "member_details/:id",
    component: <MemberDetails />,
  },
  {
    title: "Edit Payment",
    name: "payment_details/:id",
    component: <PaymentDetails />,
  },
  {
    title: "Inquiry Details",
    name: "inquiry_details/:id",
    component: <InquiryDetails />,
  },
  {
    title: "F-2-R Support List",
    name: "f_2_r_support_list/:id",
    component: <F2RSupportList />,
  },
  {
    title: "Event Details",
    name: "event_application_details/:id",
    component: <EventApplicationDetails />,
  },
  {
    title: "Event Registration",
    name: "event_resgistration",
    component: <EventRegistration />,
  },
  {
    title: "Inquiry Details",
    name: "job_and_house_support_details/:id",
    component: <JobAndHouseSupportDetails />,
  },
  {
    title: "Announcement Registration",
    name: "announcement_resgistration",
    component: <AnnouncementRegisteration />,
  },
];
