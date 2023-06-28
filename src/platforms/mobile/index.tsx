import { Route, Routes } from 'react-router-dom';
import Layout from '@/platforms/unified/components/Layout';
import Home from '@/platforms/unified/pages/Home';
import NotFound from '@/platforms/unified/pages/NotFound';

export default function Mobile() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
