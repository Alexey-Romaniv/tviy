"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "@/styles/Instagram/Instagram.module.scss";
import Image from "next/image";

const videos = [
  { id: 1, src: "/instagram/video-1.mp4", thumbnail: "/instagram/photo-1.jpg" },
  { id: 2, src: "/instagram/video-1.mp4", thumbnail: "/instagram/photo-2.jpg" },
  { id: 3, src: "/instagram/video-1.mp4", thumbnail: "/instagram/photo-3.jpg" },
  { id: 4, src: "/instagram/video-1.mp4", thumbnail: "/instagram/photo-4.jpg" },
];

const InstagramList: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>("");

  const openModal = (videoSrc: string) => {
    setCurrentVideoSrc(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoSrc("");
  };

  return (
    <>
      <div className={styles.carouselWrapper}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {videos.map((video) => (
              <div key={video.id} className={styles.emblaSlide}>
                <div
                  onClick={() => openModal(video.src)}
                  className={styles.videoThumbnail}
                >
                  <img src={video.thumbnail} alt={`Video ${video.id}`} />
                  <button
                    className={styles.playButton}
                    onClick={() => openModal(video.src)}
                  >
                    <Image
                      src={"/instagram/playBtn.svg"}
                      alt="play button"
                      width={80}
                      height={80}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <video
            className={styles.modalVideo}
            src={currentVideoSrc}
            controls
            autoPlay
          />
        </div>
      )}
    </>
  );
};

export default InstagramList;
