import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { media } from '../../utils/styled';
import { Section, SectionTitle, SectionPadding } from '../Styled';
import Card from '../Portfolio/Card';
import { PortfolioQuery } from '../../interfaces';

const GridWrapper = styled.div`
  padding-bottom: 4rem;
  padding-top: 1rem;
  background: #2f365f;
  ${media.sm`
    padding-left: 4rem;
    padding-right: 4rem;
  `}
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  display: grid;
  grid-gap: .75rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 40px;
`;

function resizeGridItem(item: HTMLElement, container: HTMLElement) {
  const rowHeight = parseInt(window.getComputedStyle(container).getPropertyValue('grid-auto-rows'), 10);
  const rowGap = parseInt(window.getComputedStyle(container).getPropertyValue('grid-row-gap'), 10);
  let rowSpan = Math.ceil(((item.querySelector('.content') as HTMLElement).getBoundingClientRect().height + rowGap) /  (rowHeight + rowGap));
  if (rowSpan < 7) {
    rowSpan = 7;
  }
  item.style.gridRowEnd = `span ${rowSpan}`;
}

export class Portfolio extends PureComponent {
  gridRef: any;

  resizeAllGridItems = () => {
    setTimeout(() => {
      [].forEach.call(this.gridRef.children, (el: HTMLElement) => {
        resizeGridItem(el, this.gridRef);
      });
    }, 10);
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeAllGridItems);
    this.resizeAllGridItems();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeAllGridItems);
  }

  render() {
    return (
      <Section background="#2f365f">
        <SectionPadding>
          <SectionTitle title="Portfolio" subTitle="Works" subtitleColor="#4dc0b5"/>
        </SectionPadding>
        <GridWrapper>
          <StaticQuery query={graphql`
            query {
              allDatoCmsPortfolio {
                edges {
                  node {
                    id
                    title
                    slug
                    contentNode {
                        childMarkdownRemark {
                          excerpt
                          timeToRead
                        }
                    }
                    image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    tags {
                      title
                      slug
                    }
                  }
                }
              }
            }
          `} render={(data: PortfolioQuery) => {
            return (
              <Grid ref={(ref: any) => this.gridRef = ref}>
                {data.allDatoCmsPortfolio.edges.map((doc, k: number) => (
                  <Card key={k} portfolio={doc.node}/>
                ))}
              </Grid>
            );
          }}/>
        </GridWrapper>
      </Section>
    );
  }
}
