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
        height="auto"
        className="p-8"
        alt="Logo"
      />
      <NavItem label={"Users"} icon={<Person></Person>} anchor={"/admin/users"}></NavItem>
      <NavItem
        label={"Trainers"}
        icon={<FitnessCenter></FitnessCenter>}
        anchor={"/admin/trainers"}
      ></NavItem>
      <NavItem
        label={"Classes"}
        icon={<DocumentScanner></DocumentScanner>}
        anchor={"/member/classes"}
      ></NavItem>
      <NavItem
        label={"History"}
        icon={<ManageHistory></ManageHistory>}
        anchor={"/member/history"}
      ></NavItem>
    </div>
  );
}
