"use client";
import styles from './page.module.css';
import Image from "next/image";

import './Gradient.js';
export const HomePage = () => {
    return (
        <div>
           
            <div class="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div class="gradients-container">
                    <div class="g1"></div>
                    <div class="g2"></div>
                    <div class="g3"></div>
                    <div class="g4"></div>
                    <div class="g5"></div>
                    <div class="interactive"></div>
                </div>
                
            </div>
            <Image
                src="/grid-2.svg"
                alt="A picture of a laptop and a cup of coffee"
                fill={true}
                className={styles.image}
            >
            </Image>
            <div className={styles.text}>
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <h1 className={styles.mainDesc}>
                        SANJANA <br /> <span>sogimatt</span> </h1>
                    <p className={styles.description} >
                        Bengaluru based digital designer crafting engaging,<br /> human-focused digital experiences for a range of forward thinking brands.
                    </p>
                </div>
            </main>
            </div>
            
        </div>
    );
}