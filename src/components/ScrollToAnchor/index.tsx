import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getDeviceType } from '@/functions/getDeviceType';

export function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    const deviceType = getDeviceType();
    let offset = 120;
    if (deviceType === 'mobile') {
      offset = 50;
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        window.scrollTo({
          behavior: 'smooth',
          top:
            document.getElementById(lastHash.current)!.getBoundingClientRect()
              .top -
            document.body.getBoundingClientRect().top -
            offset,
        });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}
