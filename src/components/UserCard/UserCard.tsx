import { usePreviousProps } from "@mui/utils";
import React from "react";
import styles from "./UserCard.module.css";
import Image from "next/image";

export interface UserCardProps {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  dob: string;
  zip: string;
  state: string;
}

export default function UserCard(props: UserCardProps) {
  return (
    <div className={styles.UserCardComponent}>
      <Image
        className={"overflow-hidden absolute top-0 left-0 z-[-1]"}
        src={props?.coverUrl || "/images/user-pattern.svg"}
        layout="fill"
        width="400px"
        height="400px"
        objectPosition={200}
        objectFit="contain"
        alt="background pattern"
      />
      <div className={styles.details}>
        <span className={styles.name}>
          {props.first_name} {props.last_name}
        </span>
        <span>{props.dob}</span>
        <span>{props.email}</span>
        <span>
          {props.city}, {props.city}, {props.zip}
        </span>
      </div>
      <div className={styles.photo}>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        ></img>
      </div>
    </div>
  );
}
