import Navbar from "@/components/Form/Navbar";
import Head from "next/head";
import style from "./home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${style.mainContainer}`}>
        <Navbar />
      </div>
    </>
  );
}
