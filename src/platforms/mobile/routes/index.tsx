import { Route, Routes } from 'react-router-dom';
import Home from '@/platforms/unified/pages/Home';
import NotFound from '@/platforms/unified/pages/NotFound';

export function MobileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
