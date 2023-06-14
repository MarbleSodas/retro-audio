import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Infocards from "@/components/Infocards";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Contactform from "@/components/Contactform";
import Image from 'next/image';
import Back from "@/components/images/back.png";
import Floor from "@/components/images/floor.png";
import Front from "@/components/images/front.png";
import Stars from "@/components/images/stars.png";
import { useRef } from "react";
import React from 'react';
import styles from '../styles/Header.module.css';
import Logo from '../components/images/Retro Audio.svg';

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  return (
    <>
      <div className="mobileHeader">
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.align}>
              <a onClick={() => parallax.current.scrollTo(0)}><Image src={Logo} alt="Logo" className={styles.logo}/></a>
            </div>
            <div>
              <a onClick={() => parallax.current.scrollTo(0)}>Retro Audio</a>
            </div>
            <div>
            <label>
              <input type="checkbox"/>
              <span className="menu"> <span className="hamburger"></span> </span>
              <ul>
                <li> <a onClick={() => parallax.current.scrollTo(1)}>About</a> </li>
                <li> <a onClick={() => parallax.current.scrollTo(1.9)}>Products</a> </li>
                <li> <a onClick={() => parallax.current.scrollTo(3)}>Contact</a> </li>
                <li> <a href="/support" style={{textDecoration: "none"}}>Support</a> </li>
              </ul>
              </label>
            </div>
          </nav>
        </header>
      </div>
      <div className="desktopHeader">
        <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.align}>
            <a onClick={() => parallax.current.scrollTo(0)}><Image src={Logo} alt="Logo" className={styles.logo}/></a>
            <a onClick={() => parallax.current.scrollTo(0)}>Retro Audio</a>
          </div>
          <div>
              <a onClick={() => parallax.current.scrollTo(1)}>About</a>
              <a onClick={() => parallax.current.scrollTo(2.9)}>Products</a>
              <a onClick={() => parallax.current.scrollTo(4)}>Contact</a>
          </div>
          <div className="removeUnderline">
          <a href="/support" style={{textDecoration: "none"}}>Support</a>
          </div>
        </nav>
      </header>
      </div>
      <Parallax pages={5} ref={parallax}>
      <ParallaxLayer speed={0.075} offset={0}>
        <Image src={Stars} alt="backStars" className="backgroundimgStars"/>
      </ParallaxLayer>
      <ParallaxLayer speed={0.25} offset={4}>
        <div>
          <Image src={Back} alt="backdrop" className="backgroundimg"/>
          <Image src={Floor} alt="backFloor" className="backgroundimg"/>
          <Image src={Front} alt="backFront" className="backgroundimgFront"/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.075} offset={0}>
          <Hero />
      </ParallaxLayer>
      <ParallaxLayer speed={0.175} offset={1}>
          <About />
      </ParallaxLayer>
      <ParallaxLayer speed={0.175} offset={2}>
          <Infocards />
      </ParallaxLayer>
      <ParallaxLayer speed={0.175} offset={3}>
          <Products />
      </ParallaxLayer>
      <ParallaxLayer speed={0.25} offset={4}>
          <Contactform />
      </ParallaxLayer>
      </Parallax>
    </>
  );
}