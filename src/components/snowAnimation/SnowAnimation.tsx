import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiAnimation = () => {
  useEffect(() => {
    const duration = 1000000 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function frame() {
      const timeLeft = animationEnd - Date.now();
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: 1000,
        origin: {
          x: Math.random(),
          y: 0
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.2, 0.6),
        drift: randomInRange(-0.4, 0.4),
        zIndex: 0,
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }

    frame();

    return () => {

    };
  }, []);

  return null;
};

export default ConfettiAnimation;