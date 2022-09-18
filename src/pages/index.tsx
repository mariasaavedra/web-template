import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import SplashPage from "../components/SplashPage/SplashPage";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}

      {user ? (
        <div>
          Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        </div>
      ) : (
        // <a href="/api/auth/login">Login</a>
        <SplashPage></SplashPage>
      )}
    </>
  );
};

export default Home;
