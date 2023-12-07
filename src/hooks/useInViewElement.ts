import { RefObject, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useInViewElement(
  ref: RefObject<HTMLElement>,
  pathname: string
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isView, setIsView] = useState(false);
  const options = {
    rootMargin: '300px',
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

  console.log('toPage', toPage);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsView(entry.isIntersecting);
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

  return isView;
}
