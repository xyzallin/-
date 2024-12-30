import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function WeatherAnimation() {
  const manRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(manRef.current, { x: "100%", duration: 3, ease: "linear" }) // Move the man horizontally
      .to(
        backgroundRef.current,
        { backgroundImage: "url(./cloudy.jpg)", duration: 1 },
        "-=2"
      ) // Change background to cloudy after 2 seconds
      .to(manRef.current, { x: "0%", duration: 3, ease: "linear" }) // Move the man back to the start
      .to(
        backgroundRef.current,
        { backgroundImage: "url(./sunny.jpg)", duration: 1 },
        "-=2"
      ) // Change background to sunny after 2 seconds
      .repeat(-1); // Loop the animation indefinitely

    return () => tl.kill(); // Cleanup on component unmount
  }, []);

  return (
    <div className="animation-container" ref={backgroundRef}>
      <img src="./man_walking.png" alt="Walking Man" ref={manRef} />
    </div>
  );
}

export default WeatherAnimation;
