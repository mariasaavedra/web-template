import { Button, Grid, IconButton, List } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
  useEffect,
} from "react";
import ClassCardList from "../../components/ClassCardList/ClassCardList";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

export default function History() {
  const [classes, getClasses] = useState([]);

  fetch('http://www.google.com').then((res) => {
    console.log(res)
  })

  const [displayByTable, setDisplayByTable] = useState<boolean>(true);
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <Header title={"Classes"}></Header>
        </Content>
      </Layout>
    </>
  );
}
