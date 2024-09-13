"use client";
import starsBG from "@/assets/stars.png";
import GradientButton from "@/components/ui/GradientButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <>
      <div className="pt-20">

      </div>
        <motion.section
      ref={ref}
      animate={{ backgroundPositionX: starsBG.width }}
      transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
      className="h-[492px]  md:h-[800px] flex items-center  relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBG.src})`, backgroundPositionY }}
    >
      <div className=" absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5),rgb(14,0,36,.5)_78%,transparent)]"></div>

      <figure className="bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />

      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        animate={{ rotate: "1turn" }}
        className="size-[344px] md:size-[580px] absolute opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute size-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className=" absolute size-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className=" absolute size-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white inline-flex items-center justify-center rounded-full">
          <div className="size-2 bg-white rounded-full" />
        </div>
      </motion.div>
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        animate={{ rotate: "-1turn" }}
        className=" absolute size-[444px] md:size-[780px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        animate={{ rotate: "1turn" }}
        className=" absolute size-[544px] md:size-[980px] rounded-full border opacity-20  border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute size-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className=" absolute size-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </motion.div>
      <div className="container relative z-40 mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white text-center bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70  mt-5 text-center">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex mt-5 justify-center items-center">
          <GradientButton
            initial="close"
            whileInView="open"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  delay: 1,
                },
              },
              close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
            }}
          >
            Join waitlist
          </GradientButton>
        </div>
      </div>
    </motion.section>
    </>
  );
}