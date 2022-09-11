import { Grid3x3, TableRows } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import styles from "./ViewToggle.module.css";

export interface ViewToggleProps {
  displayTableIcon: boolean;
  toggleFn: Function;
}

export default function ViewToggle(props: ViewToggleProps) {
  return (
    <div className={styles.ViewToggleComponent}>
      <Button onClick={() => props.toggleFn()}>
        <Grid3x3></Grid3x3>
      </Button>

      <Button onClick={() => props.toggleFn()}>
        <TableRows></TableRows>
      </Button>
    </div>
  );
}
