import React from "react";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import styles from "./Sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";

export interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className={styles.SidebarComponent}>
      {/* <Logo></Logo> */}
      <NavItem
        label={"Dashboard"}
        icon={<DashboardIcon></DashboardIcon>}
        anchor={"#"}
      ></NavItem>
      <NavItem
        label={"Users"}
        icon={<DashboardIcon></DashboardIcon>}
        anchor={"#"}
      ></NavItem>
      <NavItem
        label={"Trainers"}
        icon={<DashboardIcon></DashboardIcon>}
        anchor={"#"}
      ></NavItem>
      <NavItem
        label={"Classes"}
        icon={<DashboardIcon></DashboardIcon>}
        anchor={"#"}
      ></NavItem>
      <NavItem
        label={"History"}
        icon={<DashboardIcon></DashboardIcon>}
        anchor={"#"}
      ></NavItem>
    </div>
  );
}
