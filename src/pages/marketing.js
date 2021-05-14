import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import Layout from 'components/layout';
import SEO from 'components/seo';
import MarketingCarousel from '../sections/marketing-carousel'
import MarketingContact from '../sections/marketing-contact';

export default function MarketingPage() {
  return (
    <ThemeProvider theme={theme}>
          <Layout colorSwitch={false} mode='dark' >
              <SEO title='Marketing | One Egate' />
              <MarketingCarousel />
              <MarketingContact />
          </Layout>
    </ThemeProvider>
  );
}
