import React from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
import { ParentComponentProps } from "../../interfaces/ParentComponentProps";

export interface LayoutProps extends ParentComponentProps {}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={
        styles.LayoutComponent + " md:grid-cols-[220px_1fr] container-fluid"
      }
    >
      {props.children}
    </div>
  );
}
