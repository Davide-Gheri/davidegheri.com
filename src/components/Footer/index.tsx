import React, { PureComponent, Ref } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { chunk } from 'lodash';
import { FooterQuery, FooterThanks } from '../../interfaces';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eff8ff;
  text-align: center;
  z-index: -1;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterVisible = styled.section`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterHidden = styled.section`
  padding: 2rem 0 1rem;
`;

const FooterListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;
`;

const FooterList = styled.ul`
  list-style: none;
  li {
    margin-bottom: .5rem;
  }
`;

const FooterListLink = styled.a`
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const FooterListItem = (props: FooterThanks) => (
  <li>
    <FooterListLink href={props.url} rel="noopener">{props.name}</FooterListLink>
  </li>
);

export const PureFooter = React.forwardRef(({data}: {data: FooterQuery}, ref: Ref<any>) => (
  <FooterWrapper ref={ref}>
    <FooterHidden>
      <h3>davidegheri.com is built thanks to:</h3>
      {data.datoCmsFooter.thanks && (
        <FooterListWrapper>
          {chunk(data.datoCmsFooter.thanks, 3).map((chunk, k) => (
            <FooterList key={k}>
              {chunk.map((thanks, k) => (
                <FooterListItem key={k} {...thanks}/>
              ))}
            </FooterList>
          ))}
        </FooterListWrapper>
      )}
    </FooterHidden>
    <FooterVisible>
      <p>DavideGheri.com | Made with ♥ by Davide Gheri</p>
    </FooterVisible>
  </FooterWrapper>
));

export default class Footer extends PureComponent<{}, {}> {
  ref = React.createRef<any>();

  componentDidMount() {
    if (this.ref.current) {
      const footer = ReactDOM.findDOMNode(this.ref.current);
      if (footer) {
        const styles = window.getComputedStyle((footer as Element));
        document.body.style.marginBottom = styles.getPropertyValue('height');
      }
    }
  }

  render() {
    return (
      <StaticQuery query={graphql`
        query FooterQuery {
          datoCmsFooter {
            thanks {
              name
              url
            }
          }
        }
      `} render={(data: FooterQuery) => {
        return (
          <PureFooter data={data} ref={this.ref}/>
        );
      }}/>
    );
  }
}
