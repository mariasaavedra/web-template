import React, { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import Button from "../Button/Button";
import styles from "./ClassCard.module.css";
import Image from "next/image";

export interface ClassCardProps {
  startTime: Date;
  title: string;
  level: string;
  location: string;
  attending: number;
  seats: number;
  price: string | number;
  coverUrl?: string;
}

export default function ClassCard(props: ClassCardProps) {
  const [days, hours, minutes, seconds] = useCountdown(props.startTime);
  return (
    <div className={styles.ClassCardComponent}>
      <Image
        className={"overflow-hidden absolute top-0 left-0 z-[-1]"}
        src={props?.coverUrl || "/images/squares.svg"}
        layout="fill"
        width='500px'
        height="500px"
        objectPosition={-100}
        objectFit='contain'
        alt="background pattern"
      />
      <div className={styles.countdown}>
        <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>
      </div>
      <div className="general-details">
        <div className="details">
          <p className={styles.header}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.price}>{props.price}</span>
          </p>
          <p className={styles.level}>{props.level}</p>
          <p className={styles.dateTime + " mt-4"}>
            <span className={styles.date}>13/06/2022</span>
            <span className={styles.duration}>2 Hours</span>
          </p>
          <p className={styles.location + " mt-4"}>{props.location}</p>
          <p className={styles.attendance + " mt-4"}>
            {props.attending}/{props.seats}
          </p>
        </div>
      </div>
      <Button stretch={true} backgroundColor="primary">
        Register
      </Button>
      {/* <button className={styles.button}>Register</button> */}
    </div>
  );
}
