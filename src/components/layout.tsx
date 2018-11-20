import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import Header from './header';
import Footer from './footer';
import './layout.css';
import { SeoQuery } from '../interfaces/seo';

const Layout = ({ children, header = true, footer = true, headerTransparent = true }: any) => (
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
    render={(data: SeoQuery) => {
      return (
        <>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags}>
            <html lang="it" />
            <title>{data.datoCmsSite.globalSeo.siteName}</title>
          </HelmetDatoCms>
          {header && <Header transparent={headerTransparent} siteTitle={data.datoCmsSite.globalSeo.siteName as string} />}
          <main>
            {children}
          </main>
          {footer && <Footer><p>DavideGheri.com | Made with ♥ by Davide Gheri</p></Footer>}
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
