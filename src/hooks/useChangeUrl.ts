import { RefObject, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useChangeUrl(
  ref: RefObject<HTMLElement>,
  page: string,
  hash: string
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const location = useLocation();
  const [toPage, setToPage] = useState(false);
  useEffect(() => {
    if (location.pathname === page) {
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

  useEffect(() => {
    if (isOnScreen) {
      history.pushState({}, '', hash);
    }
  }, [isOnScreen]);
}
