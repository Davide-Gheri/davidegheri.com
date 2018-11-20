import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { About, FullScreenContent, Portfolio, Contacts } from '../components/Home';
import Helmet from 'react-helmet';
import { SeoQuery } from '../interfaces/seo';

const IndexPage = ({ data }: {data: SeoQuery}) => {
  return (
    <Layout>
      <Helmet>
        {data.datoCmsSite.globalSeo.fallbackSeo && <meta name="description" content={data.datoCmsSite.globalSeo.fallbackSeo.description}/>}
        <script type="application/ld+json">
          {`
              {
                "@context": "http://schema.org",
                "@type": "WebPage",
                "name": "${data.datoCmsSite.globalSeo.siteName}",
                "mainEntity": {
                  "@type": "LocalBusiness",
                  "@id": "#org",
                  "name": "${data.datoCmsSite.globalSeo.siteName}",
                  "image": "https://www.datocms-assets.com/8298/1542709217-sample-5.jpg",
                  "address": {
                    "@type": "PostalAddress",
                      "addressCountry": "Country",
                      "addressRegion": "Region",
                      "postalCode": "1010101",
                      "streetAddress": "Address",
                      "email": "mail@example.com",
                      "telephone": "00123457869"
                  },
                  "founder": {
                    "@type": "Person",
                    "@id": "#me",
                    "name": "${data.datoCmsSite.name}"
                  }
                },
                "publisher": {"@id": "#org"},
                "author": {"@id": "#me"}
              }
            `}
        </script>
      </Helmet>
      <FullScreenContent siteTitle={data.datoCmsSite.name}/>
      <About/>
      <Portfolio/>
      <Contacts/>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    datoCmsSite {
      name
      globalSeo {
        siteName
        fallbackSeo {
          title
          description
        }
      }
    }
  }
`;
