import { useState, useEffect } from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import UserCard from "../../components/UserCard/UserCard";

export default function Users() {
  const url = "http://localhost:3333/users";

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.status !== 200) {
        throw Error("Unable to retrieve trainers");
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
        <Header title={"Users"}></Header>
          {data &&
            data.length > 0 &&
            data.map((trainer, id) => {
              return (
                <UserCard
                  key={id}
                  first_name={trainer.first_name}
                  last_name={trainer.last_name}
                  email={trainer.email}
                  city={trainer.city}
                  dob={trainer.dob}
                  zip={trainer.zip}
                  state={trainer.state}
                ></UserCard>
              );
            })}
        </Content>
      </Layout>
    </>
  );
}
