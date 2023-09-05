import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import { SideMenuProvaider } from '@/providers/SideMenuProvaider';
import { AllRefProvaider } from '@/providers/AllRefProvider';
import { Download } from "@/pages/Download";
import { Contacts } from "@/pages/Contacts";

export function App() {
  return (
    <AllRefProvaider>
      <SideMenuProvaider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </SideMenuProvaider>
    </AllRefProvaider>
  );
}
