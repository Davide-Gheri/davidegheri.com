import React from 'react';
import styled from 'styled-components';

export const Section = styled('section')<{background?: string}>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 15rem;
  background: ${props => props.background || '#ffffff'};
`;
