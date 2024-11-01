"use client";

import Image from "next/image";
import { animate, motion, useMotionValue, useScroll } from 'framer-motion';
import HorizontalScroll from "../horizontal-scroll"; 
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
 

export const SocialProof = () => {
    
    const images = [
        '/images/hero/brand/1cztq58Fj7to7zz8dMarT0oz8.svg',
        '/images/hero/brand/ABZm12rBwLLZEO4MvzbUsQepmlU.svg',
        '/images/hero/brand/InIlH0H8DraCdfCKhBGQrQpLZbY.svg',
        '/images/hero/brand/6AbRyXI1vp9kRvdUWpFXQBuEI.svg',
        '/images/hero/brand/1cztq58Fj7to7zz8dMarT0oz8.svg',
        '/images/hero/brand/ABZm12rBwLLZEO4MvzbUsQepmlU.svg',
        '/images/hero/brand/InIlH0H8DraCdfCKhBGQrQpLZbY.svg',
        '/images/hero/brand/6AbRyXI1vp9kRvdUWpFXQBuEI.svg',

      ];
      const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - images.length;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    
    <motion.div
    className="left-0 flex "
    style={{ x: xTranslation , gap: '3rem' }}
    ref={ref}
    onHoverStart={() => {
      setMustFinish(true);
      setDuration(SLOW_DURATION);
    }}
    onHoverEnd={() => {
      setMustFinish(true);
      setDuration(FAST_DURATION);
    }}
  >
    {[...images, ...images].map((item, idx) => (
      <HorizontalScroll image={`${item}`} key={idx} />
    ))}
  </motion.div>

    
  );
};
