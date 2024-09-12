import React from "react";
import styles from "@/styles/Reviews/ClientsSay.module.scss";
import Link from "next/link";
import ArrowNext from "@/../public/carousel-next.svg";
import Image from "next/image";
const ClientsSay = () => {
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
        <div className={`${styles.image} ${styles.imageLeft}`}>
          <img src="/reviews/clientSay-1.png" alt="image right" />
        </div>
        <div className={`${styles.image} ${styles.imageRight}`}>
          <img src="/reviews/clientSay-2.png" alt="image right" />
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
