import React from "react";
import ClassCard from "../ClassCard/ClassCard";
import styles from "./ClassCardList.module.css";

export interface ClassCard {
  startTime: Date;
  title: string;
  level: string;
  location: string;
  attending: number;
  seats: number;
  price: string | number;
}

export interface ClassCardListProps {
  classes?: Array<ClassCard>;
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

ClassCardList.defaultProps = {
  classes: [
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
    {
      startTime: new Date(),
      title: "Chest Workout",
      level: "Expert",
      location: "TBD",
      attending: 10,
      seats: 20,
      price: "$5.99",
    },
  ],
};
