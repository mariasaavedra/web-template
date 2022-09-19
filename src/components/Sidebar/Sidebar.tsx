import React from "react";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import styles from "./Sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Image from "next/image";
import {
  DocumentScanner,
  FitnessCenter,
  ManageHistory,
  Person,
} from "@mui/icons-material";

export interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className={styles.SidebarComponent}>
      {/* <Logo></Logo> */}
      <img src={"/images/logo.png"} height="auto" className="p-8" alt="Logo" />
      <NavItem
        label={"Users"}
        icon={<img src="/images/icons/user_icon.png"></img>}
        anchor={"/admin/users"}
      ></NavItem>
      <NavItem
        label={"Trainers"}
        icon={<img src="/images/icons/trainers_icon.png"></img>}
        anchor={"/admin/trainers"}
      ></NavItem>
      <NavItem
        label={"Classes"}
        icon={<img src="/images/icons/class_list_icon.png"></img>}
        anchor={"/member/classes"}
      ></NavItem>
      <NavItem
        label={"History"}
        icon={<img src="/images/icons/history_icon.png"></img>}
        anchor={"/member/history"}
      ></NavItem>

      {/* Bottom Anchored Items */}
      <div className="absolute bottom-0">
        <NavItem
          label={"Profile"}
          icon={<img src="/images/icons/history_icon.png"></img>}
          anchor={"/auth/profile"}
        ></NavItem>

        <NavItem
          label={"Log Out"}
          icon={<img src="/images/icons/history_icon.png"></img>}
          anchor={"/api/auth/logout"}
        ></NavItem>
      </div>
    </div>
  );
}
