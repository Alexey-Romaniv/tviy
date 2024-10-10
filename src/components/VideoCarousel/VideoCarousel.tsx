"use client";
import React, { useState, useCallback } from "react";
import Carousel from "./Carousel";
import VideoList from "./VideoList";
import styles from "@/styles/Carousel/VideoCarousel.module.scss";

const ParentComponent: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onSelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <section className={styles.videoCarousel}>
      <div className="container">
        <Carousel selectedIndex={selectedIndex} onSelect={onSelect} />
        <VideoList selectedIndex={selectedIndex} onSelect={onSelect} />
      </div>
    </section>
  );
};

export default ParentComponent;
