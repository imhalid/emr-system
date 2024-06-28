import { useState, useEffect } from "react"
export const useMatchMedia = (mediaQuery: string, initialValue: boolean): boolean => {
  const [isMatching, setIsMatching] = useState<boolean>(initialValue);

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);

    const listener = (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
    };

    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener);
    } else {
      watcher.addListener(listener);
    }

    return () => {
      if (watcher.removeEventListener) {
        watcher.removeEventListener('change', listener);
      } else {
        watcher.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};