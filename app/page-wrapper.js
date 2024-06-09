"use client";
import {motion} from "framer-motion";
import styles from "./page.module.css";

export const PageWrapper = ({ children }) => (
    <>
        <motion.main className={styles.white}>
            {children}
        </motion.main>
    </>
);