import React, { PureComponent, RefObject } from 'react';
import { PortfolioQuery } from '../../interfaces';
import styled from 'styled-components';
import { media } from '../../utils/styled';
import Card from './Card';

const GridWrapper = styled.div`
  padding-bottom: 4rem;
  padding-top: 1rem;
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

export class PortfolioGrid extends PureComponent<{data: PortfolioQuery}> {
  private gridRef: RefObject<any> = React.createRef<any>();

  resizeAllGridItems = () => {
    setTimeout(() => {
      if (this.gridRef.current) {
        [].forEach.call(this.gridRef.current.children, (el: HTMLElement) => {
          resizeGridItem(el, this.gridRef.current);
        });
      }
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
      <GridWrapper>
        <Grid ref={this.gridRef}>
          {this.props.data.allDatoCmsPortfolio.edges.map((doc, k: number) => (
            <Card key={k} portfolio={doc.node}/>
          ))}
        </Grid>
      </GridWrapper>
    );
  }
}
