import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Project.css";
import {Card} from "./Card.js";
import Image from "next/image";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.8,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <div>
    <h1 class="project-header">Projects</h1>
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="card__content">
            <Image src="/p5.jpg" alt="gradient" width={500} height={1000} className="image" />
            <h3>Interactive Gradient Background</h3>
            </div>
          </div>
          <div className="scroll-section">
          <div className="card__content">
            <Image src="/p4.jpg" alt="gradient" width={500} height={1000} className="image" />
            <h3>Interactive Gradient Background</h3>
            </div>
            </div>
          <div className="scroll-section">
          <div className="card__content">
            <Image src="/p5.jpg" alt="gradient" width={500} height={1000} className="image" />
            <h3>Interactive Gradient Background</h3>
            </div>
            </div>
          <div className="scroll-section">
          <div className="card__content">
            <Image src="/p1.jpg" alt="gradient" width={500} height={1000} className="image" />
            <h3>Interactive Gradient Background</h3>
            </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ScrollSection;