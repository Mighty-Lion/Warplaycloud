import { RefObject, useEffect, useRef, useState } from 'react';
import {useLocation} from "react-router-dom";

export default function useElementOnScreen(ref: RefObject<HTMLElement>) {
  // console.log('useElementOnScreen');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const options = {
    rootMargin: '200px',
    threshold: 1.0,
  };

  const location = useLocation();

  useEffect(() => {
    // execute on location change
    console.log('Location changed!', location.pathname);
  }, [location]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      // console.log(entry);
    }, options);
  }, [window.scrollY]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.observe(ref.current!);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref, location]);

  return isOnScreen;
}
