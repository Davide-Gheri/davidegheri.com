import styled from 'styled-components';
import { Link } from 'gatsby';

export * from './Content';
export * from './Sections';
export * from './SectionPadding';
export * from './SectionTitle';
export * from './Section';
export * from './PortfolioSections';
export * from './Checkmark';

export const DateDivider = styled.span`
  display: inline-block;
  margin: 0 6px 1px;
`;

export const CategoryLink = styled(Link)`
  color: #26a6ed;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
