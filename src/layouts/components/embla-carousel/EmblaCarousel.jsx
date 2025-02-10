import React from "react";
import "./EmblaCarousel.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";

import img1 from "../../../../public/images/inducitrica/expo1.jpg";
import img2 from "../../../../public/images/inducitrica/expo2.jpg";
import img3 from "../../../../public/images/inducitrica/expo3.jpg";

const slides = [img1, img2, img3];

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number rounded-3xl overflow-hidden ">
                {" "}
                <img
                  src={img.src}
                  className="hover:cursor-grab h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        /> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
