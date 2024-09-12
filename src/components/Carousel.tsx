"use client";
import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.scss";
import nextBtn from "@/../public/carousel-next.svg";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/carousel-1.jpg",
    bg: "/carousel-bg-1.jpg",
    title: "Терапевтичний вечір поезії",
    text: "Реальний досвід та цінні навички <br> Найкращще вкладення - це вкладення в себе",
  },
  {
    id: 2,
    src: "/carousel-2.jpg",
    bg: "/carousel-bg-2.jpg",
    title: "Ретрит",
    text: "Реальний досвід та цінні навички<br>Найкращще вкладення - це вкладення в себе",
  },
  {
    id: 3,
    src: "/carousel-3.jpg",
    bg: "/carousel-bg-3.jpg",
    title: "Онлайн-курс “Хороша дівчинка”",
    text: "Реальний досвід та цінні навички<br>Найкращще вкладення - це вкладення в себе",
  },
  {
    id: 4,
    src: "/carousel-4.jpg",
    bg: "/carousel-bg-4.jpg",
    title: "Індивідуальні консультації",
    text: "Реальний досвід та цінні навички<br>Найкращще вкладення - це вкладення в себе",
  },
];

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    axis: "y",
    align: "start",

    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  const onSelect = useCallback(() => {
    if (emblaApi && emblaApi2) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi, emblaApi2]);

  useEffect(() => {
    if (emblaApi && emblaApi2) {
      emblaApi.on("select", onSelect);

      console.log(emblaApi2.on("select", onSelect));
    }
  }, [emblaApi, emblaApi2, onSelect]);

  useEffect(() => {
    if (emblaApi2) {
      emblaApi2.scrollTo(selectedIndex);
    }
  }, [selectedIndex]);
  return (
    <div className="container">
      <div className={styles.carouselWrapper}>
        {/* Блок с фоном */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.carouselBackground} ${
              index === selectedIndex ? styles.activeBackground : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(31, 1, 1, 0.47), rgba(31, 1, 1, 0.47)), url(${image.bg})`,
            }}
          ></div>
        ))}

        <div ref={emblaRef2} className={styles.titleViewport}>
          <div className={styles.titleContainer}>
            {images.map((el, i) => (
              <div key={i} className={styles.carousel__title}>
                <span>{el.title}</span>
              </div>
            ))}
          </div>
          {/* <h2 className={styles.carousel__title}>
            {images[selectedIndex].title}
            </h2> */}
        </div>
        <p
          className={styles.carousel__text}
          dangerouslySetInnerHTML={{
            __html: images[selectedIndex].text,
          }}
        />
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {images.map((image, index) => (
              <div
                className={`${styles.emblaSlide} ${
                  index === selectedIndex ? styles.emblaSlideActive : ""
                }`}
                key={image.id}
              >
                <img src={image.src} alt={image.title} />
              </div>
            ))}
          </div>
        </div>
        <button
          className={styles.nextButton}
          onClick={() => emblaApi?.scrollNext()}
        >
          <Image
            color="white"
            src={nextBtn}
            width={240}
            height={60}
            alt="next button"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
