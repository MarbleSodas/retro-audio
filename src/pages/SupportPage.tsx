import styles from '../styles/Header.module.css';
import Logo from '../components/images/Logo.svg';
import Image from 'next/image';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from "react";
import Stars from "@/components/images/stars.png";
import Support from "@/components/Support";
import Contactform from '@/components/Contactform';
import OnandOff from '@/components/OnandOff';
import Testing from '@/components/Testing';
import Record from '@/components/Record';
import Link from 'next/link';

export default function SupportPage() {
    const useParallax = useRef<IParallax>(null!);
    return (
      <>
        <div className="mobileHeader">
          <header className={styles.header}>
            <nav className={styles.nav}>
              <div className={styles.align}>
                <Link href='/'><Image src={Logo} alt="Logo" className={styles.logo}/></Link>
              </div>
              <div>
                <Link href='/'>Retro Audio</Link>
              </div>
            </nav>
          </header>
        </div>
        <div className="desktopHeader">
          <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.align}>
            <Link href='/'><Image src={Logo} alt="Logo" className={styles.logo}/></Link>
            <Link href='/' style={{textDecoration: "none"}}>Retro Audio</Link>
            </div>
          </nav>
        </header>
        </div>
        <Parallax pages={6} ref={useParallax}>
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