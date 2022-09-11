import Content from "../../components/Content/Content";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Users() {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Content>
          <h1>Users</h1>
        </Content>
      </Layout>
    </>
  );
}
