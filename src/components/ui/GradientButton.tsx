'use client'
import React from "react";
import { Variants , motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function GradientButton({
  className,
  children,
  variants,
  initial,
  animate,
  whileInView,
}: {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  initial?: string;
  animate?: string;
  whileInView?: string;
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      className={twMerge(
        "relative py-2 px-3 rounded-xl list-none font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]",
        className
      )}
      variants={variants}
    >
      <span>{children}</span>
      <div className=" absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className=" absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg" />
      </div>
    </motion.div>
  );
}