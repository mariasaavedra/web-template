import ClassCardList from "../../components/ClassCardList/ClassCardList";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";

export default function History() {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <div>
          <h1>Classes</h1>
          <Table columns={[]} data={[]}></Table>
          <ClassCardList></ClassCardList>
        </div>
      </Layout>
    </>
  );
}
