import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-use';
import { IdentityContextProvider } from 'react-netlify-identity';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import { SideMenuProvaider } from '@/providers/SideMenuProvaider';
import { AllRefProvaider } from '@/providers/AllRefProvider';
import { Download } from '@/pages/Download';
import { Contacts } from '@/pages/Contacts';
import { Registration } from '@/pages/Registration';
import { Authorization } from '@/pages/Authorization';
import {MailConfirmation} from "@/pages/MailConfirmation";

export function App() {
  const url = 'https://sweet-kitsune-9f3e8d.netlify.app/';

  return (
    <IdentityContextProvider url={url}>
      <AllRefProvaider>
        <SideMenuProvaider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/confirmation" element={<MailConfirmation />} />
              <Route path="/Download" element={<Download />} />
              <Route path="/Contacts" element={<Contacts />} />
              <Route path="/Registr" element={<Registration />} />
              <Route path="/Authorization" element={<Authorization />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SideMenuProvaider>
      </AllRefProvaider>
    </IdentityContextProvider>
  );
}
