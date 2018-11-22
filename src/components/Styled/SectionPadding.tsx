import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/styled';

export const SectionPadding = styled.div`
  position: relative;
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  padding: 1.5rem 2rem;
  ${media.md`
    padding: 1.5rem 4rem;
  `}
`;
