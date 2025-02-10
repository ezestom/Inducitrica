import EmblaCarousel from "../../layouts/components/embla-carousel/EmblaCarousel";


const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export function EmblaCarouselComponent() {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
