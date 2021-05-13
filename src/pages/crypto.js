import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import Layout from 'components/layout';
import Banner from '../sections/banner-crypto';
import SEO from 'components/seo';
import Package from '../sections/package';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
          <Layout colorSwitch={false} mode='dark' >
              <SEO title='Crypto Trading | One Egate' />
              <Banner />
              <Package />
          </Layout>
    </ThemeProvider>
  );
}
