import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Products from "@/components/Products";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Contactform from "@/components/Contactform";

export default function Home() {
  return (
    <>
      <Header />
      <Parallax pages={4}>
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
        <ParallaxLayer speed={0.175} offset={3}>
          <div id="contactform">
            <Contactform />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}