import React from 'react';
import { useWindowSize } from 'react-use';

const SuspendedMobileApplication = React.lazy(
  () => import('./platforms/mobile')
);
const SuspendedDesktopApplication = React.lazy(
  () => import('./platforms/mobile')
);

export function Carrier() {
  const { width } = useWindowSize();

  if (width <= 768) {
    return <SuspendedMobileApplication />;
  }

  return <SuspendedDesktopApplication />;
}
