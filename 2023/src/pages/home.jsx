import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <h1 className="title">Easter Puzzle 2023</h1>
      <div className="list-container">
        <ul className="link-list">
          <li><Link href="/maggie">Maggie</Link></li>
          <li><Link href="/reagan">Reagan</Link></li>
          <li><Link href="/eliza">Eliza</Link></li>
          <li><Link href="/jamie">Jamie</Link></li>
        </ul>
      </div>
       {/* When the user hovers over the image we apply the wiggle style to it 
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cdn.glitch.com/2f80c958-3bc4-4f47-8e97-6a5c8684ac2c%2Fillustration.svg?v=1618196579405"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style 
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello}>
            Psst, click me
          </a>
        </animated.div>
      </div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div> */}
    </>
  );
}
