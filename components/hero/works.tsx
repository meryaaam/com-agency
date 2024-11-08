'use client';

import { Link } from '@nextui-org/link';
import { motion, useSpring } from 'framer-motion';
import React, { useState, MouseEvent, useRef } from 'react';
import { button as buttonStyles } from "@nextui-org/theme"; 

interface ImageItem {
  img: string;
  label: string;
  description:string ; 

}

function ImageReveal2() {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>(
    {
      src: '',
      alt: '',
      opacity: 0,
    }
  );

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const list: ImageItem[] = [
    {
      img: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
      label: 'Revamping User Experiences',
      description : ' A Web Design Overhaul for Digital Growt',
    },
    {
      img: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
      label: 'From Concept to Canvas',
      description : 'Crafting Visual Identities that Stand Out',
    },
    {
      img: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
      label: 'Climbing the Ranks',
      description : 'An SEO Project That Drives Organic Growth',
    },
    {
      img: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
      label: 'Maximizing ROI',
      description : 'Comprehensive Digital Marketing Campaigns for Business Success',
    },
    {
        img: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
        label: 'Complete Digital Transformation',
        description : 'A Holistic Approach to Web Design, SEO, and Marketing',
      },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.label, opacity });
  };
 
  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className='relative w-full mx-auto p-4'
    >
        <div className='absolute top-0 left-0 w-full h-full'>
            dss
        </div>
      {list.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className='w-full py-5 cursor-pointer  text-center flex justify-between border-b last:border-none'
        >
          <p className='font-bold lg:text-2xl '  style={{
             
            fontFamily: 'inherit',
            fontWeight: '800', 
            position: 'relative', 
            textTransform: 'uppercase',
            
          }}>{item.label}</p>
          
          <Link
          style={{
            fontSize: '18px',
            color: '#e1e1e1',
            fontFamily: 'inherit',
            fontWeight: '800',
            cursor: 'pointer',
            position: 'relative',
            border: 'none',
            background: 'none',
            textTransform: 'uppercase',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
            transitionDuration: '400ms',
            transitionProperty: 'color',
          }}
        
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
           
        >
          
          {item.description}
        </Link>
        </div>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className='w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none'
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>
  );
}

export default ImageReveal2;
