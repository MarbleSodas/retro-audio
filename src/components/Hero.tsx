import React from "react";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Phone from './images/PhoneTransparent.png';
import Circle from './images/Circle.png';

function Hero() {

  return (
    <div className="toppage">
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
      <div className="cover">
        <Image alt="phone" src={Phone} className="phone"/>
        <Image alt='circle' src={Circle} className="circle"/>
      </div>
    </div>
  );
}

export default Hero;