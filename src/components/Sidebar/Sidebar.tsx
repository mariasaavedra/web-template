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
      <img
        src={"/images/logo.png"}
        width={"200px"}
        height="auto"
        alt="Logo"
      />
      <NavItem label={"Users"} icon={<Person></Person>} anchor={"#"}></NavItem>
      <NavItem
        label={"Trainers"}
        icon={<FitnessCenter></FitnessCenter>}
        anchor={"#"}
      ></NavItem>
      <NavItem
        label={"Classes"}
        icon={<DocumentScanner></DocumentScanner>}
        anchor={"#"}
      ></NavItem>
      <NavItem
        label={"History"}
        icon={<ManageHistory></ManageHistory>}
        anchor={"#"}
      ></NavItem>
    </div>
  );
}
