import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Header from '../Header';
import Footer from '../Footer';
import './layout.css';
import { SeoQuery } from '../../interfaces/seo';

interface LayoutProps {
  children: any;
  header?: boolean;
  footer?: boolean;
  headerTransparent?: boolean;
}

interface PureLayoutProps extends LayoutProps {
  data: SeoQuery;
}

export const PureLayout = ({children, header = true, footer = true, headerTransparent = true, data}: PureLayoutProps) => (
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
