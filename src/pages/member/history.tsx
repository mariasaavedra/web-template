import ClassCardList from "../../components/ClassCardList/ClassCardList";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function History() {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <div>
          <h1>History</h1>
          <ClassCardList></ClassCardList>
        </div>
      </Layout>
    </>
  );
}
