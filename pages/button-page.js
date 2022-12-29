import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
// import MenuDropdown from "../components/menu-folder/menu";
// import Trending from "../components/Trending-folder/trending";
import Btn from "../components/button-folder/Button";
import { GoPencil } from "react-icons/go";
import { AiFillAndroid } from "react-icons/ai";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <div className="bg-white w-[1200px] items-center flex h-[200px] justify-center">
            <div className="pr-[10px]">
              <Btn
                customstyle=""
                variant={"longNormal"}
                value={"Edit profile"}
                icon={
                  <div className="text-slate-100 text-[20px] pr-[10px]">
                    <GoPencil />
                  </div>
                }
              />
            </div>
            <div className="pr-[10px]">
              <Btn
                customstyle="bg-[#05a081] text-black w-[160px] flex items-center justify-center 
                                rounded-md h-[50px]  font-medium text-base"
                variant={"longNormal"}
                value={"Android"}
                icon={
                  <div className="text-black text-[20px] pr-[10px]">
                    <AiFillAndroid />
                  </div>
                }
              />
            </div>
            <div className="pr-[10px]">
              <Btn customstyle="" value={"Edit profile"} />
            </div>
            <div className="pr-[10px]">
              <Btn
                customstyle="bg-black text-[#fff] w-[300px] flex items-center justify-center 
                                rounded-md h-[70px]  font-bold text-xl"
                value={"Join The Challenge"}
              />
            </div>
            <div className="pr-[10px]">
              <Btn customstyle="" value={"closed"} />
            </div>
            <div className="pr-[10px]">
              <Btn customstyle="" value={"Upload"} />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
