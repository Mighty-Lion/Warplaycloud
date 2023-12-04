import { RefObject, useEffect, useRef, useState } from 'react';

export default function useElementOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const options = {
    rootMargin: '100px',
    threshold: 1.0,
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
    );
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      // @ts-ignore
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref]);

  return isOnScreen;
}
