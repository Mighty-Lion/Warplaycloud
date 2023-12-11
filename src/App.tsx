import { Route, Routes } from 'react-router-dom';
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
import { MailConfirmation } from '@/pages/MailConfirmation';
import { AvailableSubscriptions } from '@/pages/AvailableSubscriptions';

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
              <Route path="/download" element={<Download />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/registr" element={<Registration />} />
              <Route path="/authorisation" element={<Authorization />} />
              <Route
                path="/subscriptions"
                element={<AvailableSubscriptions />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SideMenuProvaider>
      </AllRefProvaider>
    </IdentityContextProvider>
  );
}
