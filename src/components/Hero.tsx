import React from "react";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Phone from './images/PhoneTransparent.png';
import moon from './images/moon.png';
import { motion } from "framer-motion";

function Hero() {

  return (
    <div className="toppage">
      <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
      <header className="hero__header">
          <h1>Something 
            <Typewriter
                  options={{
                      wrapperClassName: "typedText",
                      strings: ['Old', 'New', 'Borrowed'],
                      autoStart: true,
                      loop: true,
                  }}
              />
          </h1>
      </header>
      </motion.div>
      <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <div className="cover">
          <Image alt="phone" src={Phone} className="phone"/>
          <Image alt='moon' src={moon} className="circle"/>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;