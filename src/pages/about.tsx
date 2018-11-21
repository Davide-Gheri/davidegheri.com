import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Layout from '../components/Layout';
import { Content, FeaturedImage, FeaturedSection, MainSection, ArticleContent } from '../components/Styled';
import { AboutQuery } from '../interfaces';
import { ImageFixed, ImageFluid } from '../interfaces/common';
import { isString } from 'lodash';

interface RowContentRemark {
  childMarkdownRemark: {
    html: string;
  };
}

interface RowContentFluid {
  fluid: ImageFluid;
}

interface RowContentFixed {
  fixed: ImageFixed;
}

type RowContentContent = string | RowContentRemark | RowContentFluid | RowContentFixed;

interface RowContentProps {
  name: string;
  content: RowContentContent;
}

const RowContent = ({name, content}: RowContentProps) => {
  if (isString(content)) {
    return <div dangerouslySetInnerHTML={{__html: content}}/>;
  }
  if (content.hasOwnProperty('childMarkdownRemark')) {
    return <div dangerouslySetInnerHTML={{__html: (content as RowContentRemark).childMarkdownRemark.html}}/>;
  }
  if (content.hasOwnProperty('fluid')) {
    return <Img fluid={(content as RowContentFluid).fluid}/>;
  }
  if (content.hasOwnProperty('fixed')) {
    return <Img fixed={(content as RowContentFixed).fixed}/>;
  }
  return <p/>;
};

const AboutPage = ({data}: {data: AboutQuery}) => {
  return(
    <Layout>
      {data.datoCmsAbout.seoMetaTags && (
        <HelmetDatoCms seo={data.datoCmsAbout.seoMetaTags}/>
      )}
      {data.datoCmsAbout.image && (
        <FeaturedSection className="transparent-checker">
          <figure>
            <FeaturedImage fluid={data.datoCmsAbout.image.fluid}/>
          </figure>
        </FeaturedSection>
      )}
      <MainSection>
        {data.datoCmsAbout.page && (
          <ArticleContent>
            {data.datoCmsAbout.page.map((row, k) => (
              <Content key={k}>
                {Object.keys(row).map(name => (
                  <RowContent key={k + name} name={name} content={row[name]}/>
                ))}
              </Content>
            ))}
          </ArticleContent>
        )}
      </MainSection>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    datoCmsAbout {
      seoMetaTags {
        tags {
          tagName
          content
          attributes {
            name
            content
            property
          }
        }
      }
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      page {
        textNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        text2Node {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
