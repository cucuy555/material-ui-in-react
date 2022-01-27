import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PublicIcon from "@mui/icons-material/Public";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AgricultureIcon from "@mui/icons-material/Agriculture";
export const mainNavbarItems = [
  // {
  //   id: 0,
  //   icon: <DashboardIcon />,
  //   label: "Dashboard",
  //   route: "dashboard",
  // },
  {
    id: 1,
    icon: <AgricultureIcon />,
    label: "Farm",
    route: "farm",
  },
  {
    id: 2,
    icon: <MonetizationOnIcon />,
    label: "Mint sMKP",
    route: "mintsmkp",
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: "Boardroon",
    route: "boardroom",
  },
  {
    id: 4,
    icon: <EmojiPeopleIcon />,
    label: "Social",
    route: "social",
  },
  {
    id: 5,
    icon: <ContactPageIcon />,
    label: "Contact Us",
    route: "contact-us",
  },
];
