import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "@/styles/Carousel/VideoCarousel.module.scss";
import Fade from "embla-carousel-fade";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/videoCarousel/carousel-1.png",
    title: "Терапевтичний вечір поезії",
  },
  {
    id: 2,
    src: "/videoCarousel/carousel-2.png",
    title: "Ретрит",
  },
  {
    id: 3,
    src: "/videoCarousel/carousel-3.png",
    title: "Онлайн-курс “Хороша дівчинка”",
  },
  {
    id: 4,
    src: "/videoCarousel/carousel-4.png",
    title: "Індивідуальні консультації",
  },
];

interface SecondCarouselProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const SecondCarousel: React.FC<SecondCarouselProps> = ({
  selectedIndex,
  onSelect,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Fade()]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(selectedIndex); // Синхронизируем горизонтальную карусель
      //   emblaApi2.scrollTo(selectedIndex); // Синхронизируем вертикальную карусель
    }
  }, [selectedIndex, emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        const index = emblaApi.selectedScrollSnap();
        onSelect(index); // Обновляем индекс в родительском компоненте
      });
    }
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.carouselWrapper}>
      <div ref={emblaRef} className={styles.embla}>
        <div className={styles.emblaContainer}>
          {images.map((el, i) => (
            <div key={i} className={styles.emblaSlide}>
              <Image
                className={styles.video__img}
                src={el.src}
                alt="video image"
                width={1432}
                height={700}
              />
              <p className={styles.video__title}>{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondCarousel;
