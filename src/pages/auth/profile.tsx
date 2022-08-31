import Banner from "../../components/Banner/Banner";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from './profile.module.css';

export interface ProfileProps {
  name: string;
  email: string;
  phone: string;
  dob: string;
  city: string;
  state: string;
}
export default function Profile(props: ProfileProps) {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <div className={styles.profile}>
          <Banner name={props.name}></Banner>
          <h3>{props.name}</h3>

          <h3>Personal Infomation</h3>
          <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.dob}</p>
          <p>{props.city}</p>
          <p>{props.state}</p>
        </div>
      </Layout>
    </>
  );
}
