"use client";
import {
  type AnySlicePrimaryField,
  type FilledImageFieldImage,
  type ImageFieldImage,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Simplify } from "../../prismicio-types";

interface ParallaxImageProps {
  field: ImageFieldImage | null | undefined;
}

export const ParallaxImage = ({ field }: ParallaxImageProps) => {
  const { scrollYProgress } = useScroll();
  // Reduce movement range and start from slightly above
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="absolute inset-0 h-full w-full">
      <motion.div style={{ y }} className="relative -top-[5%] h-[110%] w-full">
        <PrismicNextImage
          field={field}
          alt=""
          fill={true}
          className="pointer-events-none object-cover select-none"
          sizes="100vw"
          priority
        />
      </motion.div>
    </div>
  );
};
