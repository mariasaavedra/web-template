import React from "react";
import ClassCard from "../ClassCard/ClassCard";
import styles from "./ClassCardList.module.css";

export interface ClassCard {
  id: string | number;
  startTime: Date;
  title: string;
  level: string;
  location: string;
  attending: number;
  seats: number;
  price: string | number;
}

export interface ClassCardListProps {
  classes: Array<ClassCard>;
}

export default function ClassCardList(props: ClassCardListProps) {
  const displayClasses = () => {
    return props.classes && props.classes.length > 0;
  };
  return (
    <div className={styles.ClassCardListComponent}>
      {displayClasses() &&
        props.classes?.map((classObj: ClassCard, i: number) => {
          return (
            <ClassCard
              key={i}
              id={classObj.id}
              startTime={classObj.startTime}
              title={classObj.title}
              level={classObj.level}
              location={classObj.location}
              attending={classObj.attending}
              seats={classObj.seats}
              price={classObj.price}
            ></ClassCard>
          );
        })}
    </div>
  );
      }
