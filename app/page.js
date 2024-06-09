"use client";
import Image from "next/image";
// import styles from "./index.css";
import styles from './page.module.css';
import { Navbar } from "./Navbar.js";
import { PageWrapper } from "./page-wrapper.js";
import { Bento } from "./bento.js";
import ScrollSection from "./Project.js";
import {HomePage} from "./Home.js";
import Footer from "./Footer.js";
import Hero from "./ProjectHeader.js";
import {Lastcompo} from "./Lastcompo.js";

export default function Home() {
  return (
    <div className={styles.home}>
       <Navbar />
      <HomePage/>
      <Hero/>
      <ScrollSection/>
      <Footer/>
      <Lastcompo/>
    </div>
  );
}
