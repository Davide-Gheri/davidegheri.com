import React, { PureComponent } from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import styled from 'styled-components';
import { debounce } from 'lodash';

const HeaderWrapper = styled.header`
  background: teal;
  padding: 0 3rem;
`;

const Navbar = styled<{transparent: boolean}, 'nav'>('nav')`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 150;
  top: 0;
  left: 0;
  color: white;
  transition: background-color .1s;
  background: ${props => props.transparent ? 'transparent' : '#2f365f'};
`;

const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 1.5rem;
`;

const HeaderTitle = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -.05em;
`;

const StyledLink = styled<GatsbyLinkProps<any>, any>(Link)`
  color: white;
  text-decoration: none;
`;

interface HeaderProps {
  siteTitle: string;
  transparent: boolean;
}

interface HeaderState {
  transparent: boolean;
}

export default class Header extends PureComponent<HeaderProps, HeaderState> {
  handleScrollDebounced: any;

  state: HeaderState = {
    transparent: true,
  };

  constructor(props: HeaderProps) {
    super(props);
    this.handleScrollDebounced = debounce(this.handleScroll, 10);
  }

  handleScroll = () => {
    const checker = document.getElementsByClassName('transparent-checker')[0];
    const height = checker ? checker.clientHeight : window.innerHeight;
    const scroll = window.pageYOffset || (document.documentElement as HTMLElement).scrollTop;
    const offset = 100;
    if (scroll + offset >= height) {
      this.setState({transparent: false});
    } else {
      this.setState({transparent: this.props.transparent});
    }
  };

  componentDidMount() {
    this.setState({transparent: this.props.transparent})
    window.addEventListener('scroll', this.handleScrollDebounced);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDebounced);
  }

  render() {
    const { siteTitle } = this.props;
    const { transparent } = this.state;
    return (
      <HeaderWrapper>
        <Navbar transparent={transparent}>
          <HeaderTitle>
            <StyledLink
              to={'/'}
            >{siteTitle}</StyledLink>
          </HeaderTitle>
        </Navbar>
      </HeaderWrapper>
    );
  }
}
