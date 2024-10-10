import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import HeroGif from "@/../public/hero.gif";
import Hero from "@/components/Hero/Hero";
import Advice from "@/components/Advice/Advice";
import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";
import ClientsSay from "@/components/Reviews/ClientsSay";
import Instagram from "@/components/Instagram/Instagram";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Image
          src={HeroGif}
          alt="hero"
          width={2000}
          height={700}
          className={styles.hero}
        />
        <Hero />
        <VideoCarousel />
        <ClientsSay />
        <Advice />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}
