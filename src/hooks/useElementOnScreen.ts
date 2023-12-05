import { RefObject, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useElementOnScreen(
  ref: RefObject<HTMLElement>,
  pathname: string
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const options = {
    rootMargin: '200px',
    threshold: 1.0,
  };

  const location = useLocation();
  const [toPage, setToPage] = useState(false);
  useEffect(() => {
    if (location.pathname === pathname) {
      setToPage(true);
    } else {
      setToPage(false);
    }
  }, [location]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, options);
  }, [toPage]);

  useEffect(() => {
    if (toPage) {
      if (observerRef.current) {
        observerRef.current.observe(ref.current!);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref, toPage]);

  return isOnScreen;
}
