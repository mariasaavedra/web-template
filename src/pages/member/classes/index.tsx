import { Button, Grid, IconButton, List } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
  useEffect,
} from "react";
import ClassCardList from "../../../components/ClassCardList/ClassCardList";
import Content from "../../../components/Content/Content";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Layout/Layout";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Table from "../../../components/Table/Table";

export default function Classes() {
  const url = "http://localhost:3333/events";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayByTable, setDisplayByTable] = useState<boolean>(true);

  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.status !== 200) {
        throw Error("Unable to retrieve classes");
      } else {
        setData(await response.json());
      }
    });
  }, []);

  useEffect(() => {
    if (data.length > 0) console.log("data:", data);
  }, [data]);

  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <Header title={"Classes"}></Header>
          <ClassCardList classes={data}></ClassCardList>
        </Content>
      </Layout>
    </>
  );
}
