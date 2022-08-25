import ClassCardList from "../../components/ClassCardList/ClassCardList";
import Table from "../../components/Table/Table";

export default function History() {
  return (
    <>
      <h1>Classes</h1>
      <Table columns={[]} data={[]}></Table>
      <ClassCardList></ClassCardList>
    </>
  );
}

