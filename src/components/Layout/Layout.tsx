import React from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
import { ParentComponentProps } from "../../interfaces/ParentComponentProps";

export interface LayoutProps extends ParentComponentProps {}

export default function Layout(props: LayoutProps) {
  return <div className={styles.LayoutComponent + " container-fluid"}>
    {props.children}
  </div>;
}
