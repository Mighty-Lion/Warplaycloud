import React from 'react';
import Layout from '@/components/Layout';
import NotFound from "@/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/Home";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
