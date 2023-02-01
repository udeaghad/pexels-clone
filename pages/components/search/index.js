import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Search from "../../../components/Search/Search";
import { IoSearchOutline } from "react-icons/io5";

export default function searchComponentbar() {
  return (
    <section>
      <section className=" flex justify-center  items-center h-[100px] relative ">
        <Search
          type="text"
          placeholder="Search for free photos"
          inputstyling="text-slate-600 border-none "
          icon={<IoSearchOutline />}
        />
      </section>
    </section>
  );
}
