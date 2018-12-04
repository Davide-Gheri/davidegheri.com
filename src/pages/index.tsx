import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '@components/Layout';
import { About, FullScreenContent, Portfolio, Contacts } from '@components/Home';
import { author, publisher } from '@utils';
import { SeoNode, SeoQuery } from '@interfaces';

const IndexPage = ({ data }: {data: SeoQuery<Required<Pick<SeoNode, 'name' | 'globalSeo'>>>}) => {
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
                "mainEntity": ${publisher(data.datoCmsSite.globalSeo.siteName as string)},
                  "founder": ${author(data.datoCmsSite.name as string)}
                },
                "publisher": ${publisher(data.datoCmsSite.globalSeo.siteName as string)},
                "author": ${author(data.datoCmsSite.name as string)}
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
