import styled from 'styled-components';

export const Navbar = styled('nav')<{transparent: boolean}>`
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
