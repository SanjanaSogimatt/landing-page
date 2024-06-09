"use-client";
import styles from "./page.module.css";
export const Navbar = ({childern}) => (
    <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">SANJANA</a>
            </div>
            <ul className={styles.navas}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
);