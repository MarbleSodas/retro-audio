import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <>
      <Header />
      <Parallax pages={2}>
        <ParallaxLayer speed={0.1} offset={0}>
          <div id="home">
            <Hero />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={.9}>
          <div id="about">
            <About />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}