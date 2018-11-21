import React, { PureComponent } from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { Navbar } from './Navbar';
import { HeaderTitle, HeaderWrapper } from './HeaderSections';

const StyledLink = styled(Link)<GatsbyLinkProps<any>>`
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
    this.setState({transparent: this.props.transparent});
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
