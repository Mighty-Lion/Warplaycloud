import { RefObject, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDeviceType } from '@/functions/getDeviceType';

export default function useChangeUrl(
  ref: RefObject<HTMLElement>,
  page: string,
  hash: string
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const deviceType = getDeviceType();
  const windowInnerHeight = document.documentElement.clientHeight;
  let margin = '270px';

  if (windowInnerHeight > 850) {
    margin = '400px';
  }

  if (deviceType === 'mobile') {
    margin = '200px';
  }

  const options = {
    root: null,
    rootMargin: margin,
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
    if (isOnScreen) {
      history.pushState({}, '', hash);
    }
  }, [isOnScreen]);

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
