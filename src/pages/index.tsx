import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Products from "@/components/Products";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  return (
    <>
      <Header />
      <Parallax pages={3}>
        <ParallaxLayer speed={0.1} offset={0}>
          <div id="home">
            <Hero />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.175} offset={1}>
          <div id="about">
            <About />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.175} offset={2}>
          <div id="product">
            <Products />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}