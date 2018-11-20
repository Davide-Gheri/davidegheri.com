import React from 'react';
import styled from 'styled-components';

export const Section = styled<{background?: string}, 'section'>('section')`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 15rem;
  background: ${props => props.background || '#ffffff'};
`;
