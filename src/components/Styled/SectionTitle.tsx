import React from 'react';
import styled from '@styled-components';
import { media } from '@utils';

const Title = styled('h2')<{color?: string}>`
  font-size: 1.875rem;
  padding-bottom: .5rem;
  color: ${props => props.color || props.theme.blue};
`;

const VerticalTitle = styled('h4')<{color?: string}>`
  position: absolute;
  letter-spacing: .05rem;
  transform: rotate(-90deg);
  color: ${props => props.color || props.theme.blue};
  top: 3.5rem;
  left: -1.2rem;
  display: block;
  min-width: 70px;
  border-bottom: solid thin ${props => props.color || props.theme.blue};
  line-height: 1;
  ${media.md`
    left: 0;
  `}
`;

export interface SectionTitleProps {
  title: string;
  subTitle: string;
  titleColor?: string;
  subtitleColor?: string;
}

export const SectionTitle = ({title, subTitle, titleColor = '#ffffff', subtitleColor = '#2f365f'}: SectionTitleProps) => (
  <div>
    <VerticalTitle color={subtitleColor}>{subTitle}</VerticalTitle>
    <Title color={titleColor}>{title}</Title>
  </div>
);
