import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `ParallaxHero`.
 */
export type ParallaxHeroProps = SliceComponentProps;

/**
 * Component for "ParallaxHero" Slices.
 */
const ParallaxHero = ({ slice }: ParallaxHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for parallax_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ParallaxHero;
