import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { ThemeProvider } from '@styled-components';
import { theme } from '@theme';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './layout.css';
import { SeoQuery } from '@interfaces';

interface LayoutProps {
  children: any;
  header?: boolean;
  footer?: boolean;
  headerTransparent?: boolean;
}

interface PureLayoutProps extends LayoutProps {
  data: Required<SeoQuery>;
}

export const PureLayout = ({children, header = true, footer = true, headerTransparent = true, data}: PureLayoutProps) => (
  <ThemeProvider theme={theme}>
    <>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags}>
        <html lang="it" />
        <title>{data.datoCmsSite.globalSeo.siteName}</title>
      </HelmetDatoCms>
      {header && <Header transparent={headerTransparent} siteTitle={data.datoCmsSite.globalSeo.siteName as string} />}
      <main>
        {children}
      </main>
      {footer && <Footer/>}
    </>
  </ThemeProvider>
);

const Layout = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        datoCmsSite {
          name
          globalSeo {
            siteName
            fallbackSeo {
              title
              description
            }
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
      }
    `}
    render={(data: SeoQuery) => (
      <PureLayout data={data} {...props}/>
    )}
  />
);

export default Layout;
