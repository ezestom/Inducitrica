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
import img4 from "../../../../public/images/inducitrica/quinta2.jpg";
import img5 from "../../../../public/images/inducitrica/farm5.jpg";
import img6 from "../../../../public/images/inducitrica/farm6.jpg";
import img7 from "../../../../public/images/inducitrica/farm12.jpg";
import img8 from "../../../../public/images/inducitrica/lemon6.jpg";
import img9 from "../../../../public/images/inducitrica/lemon1.jpg";
import img10 from "../../../../public/images/inducitrica/lemon14.jpg";
import img11 from "../../../../public/images/inducitrica/quinta3.jpg";

const slides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

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
