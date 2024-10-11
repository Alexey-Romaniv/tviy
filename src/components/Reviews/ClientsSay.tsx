"use client";
import React, { useEffect } from "react";
import styles from "@/styles/Reviews/ClientsSay.module.scss";
import Link from "next/link";
import ArrowNext from "@/../public/carousel-next.svg";
import Image from "next/image";
const ClientsSay = () => {
  let options = {
    threshold: [0.5],
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll("#image-animation");
    elements.forEach((elm) => {
      observer.observe(elm);
    });
  }, []);
  function onEntry(entry: any) {
    entry.forEach((change: any) => {
      if (change.isIntersecting) {
        console.log("addd");
        console.log(styles.show);

        change.target.classList.add(styles.show);
      }
    });
  }

  return (
    <div className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.testimonialContent}>
          <div className={styles.textRow}>
            <span>
              що <span className={styles.highlight}>ПРО РОБОТУ</span>
            </span>
            <Link href={"/"}>
              <Image
                className={styles.arrow}
                src={ArrowNext}
                width={232}
                height={77}
                alt="arrow link"
              />
            </Link>
          </div>
          <div className={`${styles.textRow} ${styles["textRow-right"]}`}>
            <span>
              <span className={styles.highlight}>ЗІ МНОЮ </span>
              говорять <br />
              <Link href={"/"}>
                <Image
                  className={styles.arrow}
                  src={ArrowNext}
                  width={232}
                  height={77}
                  alt="arrow link"
                />
              </Link>
              <span className={styles.highlight}>КЛІЄНТИ</span>
            </span>
          </div>
        </div>
        <div
          id="image-animation"
          className={`${styles.image} ${styles.imageLeft}`}
        >
          <img src="/reviews/clientSay-1.png" alt="image right" />
        </div>
        <div
          id="image-animation"
          className={`${styles.image} ${styles.imageRight}`}
        >
          <img src="/reviews/clientSay-2.png" alt="image right" />
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
