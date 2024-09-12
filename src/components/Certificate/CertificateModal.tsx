"use client";
import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import styles from "@/styles/Certificate/Certificate.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import Arrow from "@/../public/certificate/arrow-left.svg";
import Close from "@/../public/certificate/close.svg";

const CertificateModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const photos = [
    "/certificate/image-1.jpg",
    "/certificate/image-1.jpg",
    "/certificate/image-1.jpg",
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const onSelect = useCallback(() => {
    console.log(emblaApi);
    if (emblaApi) {
      //   setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Закрываем модалку, только если клик был на бекдропе
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return !isOpen ? null : (
    <div className={styles.certificate__backdrop} onClick={handleBackdropClick}>
      <div className="" style={{ position: "relative" }}>
        <div className={styles.certificate__viewport} ref={emblaRef}>
          <div className={styles.certificate__container}>
            {photos.map((link, i) => (
              <Image
                key={i}
                className={styles.certificate__image}
                alt="certificate"
                src={link}
                width={400}
                height={200}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className={styles.certificate__close}
        >
          <Image
            className={styles.close__img}
            src={Close}
            alt="close"
            width={15}
            height={15}
          />
        </button>
      </div>
      <button
        className={styles.prevButton}
        onClick={() => emblaApi?.scrollPrev()}
      >
        <Image
          className={styles.arrow__left}
          src={Arrow}
          alt="arrow"
          width={30}
          height={30}
        />
      </button>
      <button
        className={styles.nextButton}
        onClick={() => emblaApi?.scrollNext()}
      >
        <Image
          className={styles.arrow__right}
          src={Arrow}
          alt="arrow"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default CertificateModal;
