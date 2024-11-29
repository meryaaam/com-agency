"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

export default function Socials() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const images = [
    "/images/hero/brand/1cztq58Fj7to7zz8dMarT0oz8.svg",
    "/images/hero/brand/ABZm12rBwLLZEO4MvzbUsQepmlU.svg",
    "/images/hero/brand/InIlH0H8DraCdfCKhBGQrQpLZbY.svg",
    "/images/hero/brand/6AbRyXI1vp9kRvdUWpFXQBuEI.svg",
  ];

  return (
    <section className="h-screen items-center justify-center sticky top-0">
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        style={{
          position: "relative",
          display: "flex",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "calc(100vh - 350px)" }}>
          <div
            ref={slider}
            style={{ whiteSpace: "nowrap", position: "relative" }}
          >
            <p
              ref={firstText}
              style={{
                position: "relative",
                margin: 0,
                color: "black",
                fontSize: "230px",
                fontWeight: 500,
                paddingRight: "50px",
              }}
            >
              Freelance Developer -
            </p>
            <p
              ref={secondText}
              style={{
                position: "absolute",
                left: "100%",
                top: 0,
                margin: 0,
                color: "black",
                fontSize: "230px",
                fontWeight: 500,
              }}
            >
              Freelance Developer -
            </p>
          </div>
        </div>
      </motion.main>
    </section>
  );
}
