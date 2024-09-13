'use client'
import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-apex.png";
import echoLogo from "../assets/logo-quantum.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-echo.png";
import apexLogo from "../assets/logo-pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return <div className="bg-black text-white py-[72px] sm:py-24">
    <div className="container relative ">
      <h2 className="text-xl text-white/70 text-center  ">Trusted By The World  most innovation Teams </h2>
      <div className="overflow-hidden flex mt-9 before:content-[''] before:z-10 after:content-['']  after:right-0 before:left-0 before:top-0 after:top-0 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  relative  before:absolute before:h-full before:w-5  after:absolute after:h-full after:w-5   ">
        <motion.div
          transition={{
            duration: 10,
            ease: 'linear',
            repeat:Infinity,
          }}
          initial={{
        translateX:0
          }}
          animate={{
        translateX:'-50%'
          }}
          className="flex gap-14 flex-none pr-16 ">
        {images.map((imgSrc , index) =>   <Image key={index} className="flex-none w-36 h-w-36 object-contain" src={imgSrc.src} alt={imgSrc.alt}/>)}
        {images.map((imgSrc , index) =>   <Image key={index} className="flex-none w-36 h-w-36 object-contain" src={imgSrc.src} alt={imgSrc.alt}/>)}

      </motion.div>
      </div>
    </div>
  </div>
};
