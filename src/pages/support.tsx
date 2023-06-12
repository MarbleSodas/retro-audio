import styles from '../styles/Header.module.css';
import Logo from '../components/images/Retro Audio.svg';
import Image from 'next/image';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from "react";
import Stars from "@/components/images/stars.png";
import Support from "@/components/Support";
import Contactform from '@/components/Contactform';
import OnandOff from '@/components/OnandOff';
import Testing from '@/components/Testing';
import Record from '@/components/Record';

export default function support() {
    const parallax = useRef<IParallax>(null!);
    return (
      <>
        <div className="mobileHeader">
          <header className={styles.header}>
            <nav className={styles.nav}>
              <div className={styles.align}>
                <a href='/'><Image src={Logo} alt="Logo" className={styles.logo}/></a>
              </div>
              <div>
                <a href='/'>Retro Audio</a>
              </div>
            </nav>
          </header>
        </div>
        <div className="desktopHeader">
          <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.align}>
            <a href='/'><Image src={Logo} alt="Logo" className={styles.logo}/></a>
            <a href='/' style={{textDecoration: "none"}}>Retro Audio</a>
            </div>
          </nav>
        </header>
        </div>
        <Parallax pages={6} ref={parallax}>
            <ParallaxLayer speed={0.015} offset={0}>
                <Image src={Stars} alt="backStars" className="backgroundimgStarsSupport"/>
            </ParallaxLayer>
            <ParallaxLayer speed={0.175} offset={0}>
                <Support/>
            </ParallaxLayer>
            <ParallaxLayer speed={0.275} offset={1}>
                <Record/>
            </ParallaxLayer>
            <ParallaxLayer speed={0.275} offset={2}>
                <OnandOff/>
            </ParallaxLayer>
            <ParallaxLayer speed={0.275} offset={3}>
                <Testing/>
            </ParallaxLayer>
            <ParallaxLayer speed={0.275} offset={5}>
                <Contactform/>
            </ParallaxLayer>
        </Parallax>
      </>
    );
  }