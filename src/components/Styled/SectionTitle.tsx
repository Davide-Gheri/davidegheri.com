import React from 'react';
import styled from 'styled-components';

const Title = styled('h2')<{color: string}>`
  font-size: 1.875rem;
  padding-bottom: .5rem;
  color: ${props => props.color || '#2f365f'};
`;

const VerticalTitle = styled('h4')<{color: string}>`
  position: absolute;
  letter-spacing: .05rem;
  transform: rotate(-90deg);
  left: 0;
  top: 3.5rem;
  color: ${props => props.color || '#2f365f'};
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
