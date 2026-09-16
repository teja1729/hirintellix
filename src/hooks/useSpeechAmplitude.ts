"use client";

import { useEffect, useRef, useState } from "react";

/** Syllable-like envelope so the mouth opens and closes instead of hovering open. */
export function useSimulatedAmplitude(speaking: boolean) {
  const [amplitude, setAmplitude] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    const tick = (time: number) => {
      if (speaking) {
        const syllable = Math.max(0, Math.sin(time / 52));
        const burst = Math.max(0, Math.sin(time / 19));
        const rest = Math.sin(time / 140) > 0.55 ? 0.08 : 1;
        setAmplitude(Math.min(1, (syllable ** 2 * 0.85 + burst * 0.2) * rest));
      } else {
        setAmplitude(0);
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [speaking]);

  return amplitude;
}
