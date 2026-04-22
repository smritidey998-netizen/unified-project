import { useEffect, useState } from "react";

type WindowScrollPosition = {
  x: number;
  y: number;
};

function getWindowScrollPosition(): WindowScrollPosition {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }

  return {
    x: window.scrollX,
    y: window.scrollY,
  };
}

export function useWindowScroll(): WindowScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<WindowScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition((currentPosition) => {
        const nextPosition = getWindowScrollPosition();

        if (
          currentPosition.x === nextPosition.x &&
          currentPosition.y === nextPosition.y
        ) {
          return currentPosition;
        }

        return nextPosition;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
