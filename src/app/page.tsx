import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import HeroGif from "@/../public/hero.gif";
import Hero from "@/components/Hero/Hero";
import Advice from "@/components/Advice/Advice";
import Carousel from "@/components/Carousel";
import ClientsSay from "@/components/Reviews/ClientsSay";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Image
          src={HeroGif}
          alt="hero"
          width={400}
          height={100}
          className={styles.hero}
        />
        <Hero />
        <Carousel />
        <ClientsSay />
        <Advice />
      </main>
    </div>
  );
}
