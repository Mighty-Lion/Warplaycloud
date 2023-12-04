import { RefObject, useEffect, useRef, useState } from 'react';

export default function useElementOnScreen(ref: RefObject<HTMLElement>) {
  console.log('useElementOnScreen');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const options = {
    rootMargin: '200px',
    threshold: 1.0,
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      // console.log(entry);
    }, options);
  }, [window.scrollY]);

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
  }, [ref, window.scrollY]);

  return isOnScreen;
}
