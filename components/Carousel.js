import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./carousel.module.css";
import Image from "next/image";

const Carousel = ({ slides, images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  useEffect(() => {}, []);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((index) => (
          <>
            <div className={styles.embla__slide}>
              <div className={styles.embla__slide__inner}>
                <Image
                  className={styles.embla__slide__img}
                  src={images(index)}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
