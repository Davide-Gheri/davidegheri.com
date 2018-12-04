import React from 'react';
import styled, { keyframes } from '@styled-components';

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const fill = (props: any) => keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px ${props.color};
  }
`;

export const CheckmarkCircle = styled('circle')`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #fff;
  fill: none;
  animation: ${stroke} .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
`;

export const CheckmarkPath = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
`;

export const CheckmarkLine = styled.line`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
`;

export const CheckmarkSvg = styled('svg')<{success?: boolean, error?: boolean}>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px ${props => props.success ? props.theme.success : props.error ? props.theme.error : '#fff'};
  animation: ${fill} .4s ease-in-out .4s forwards, ${scale} .3s ease-in-out .9s both;
  ${CheckmarkCircle} {
    stroke: ${props => props.success ? props.theme.success : props.error ? props.theme.error : '#fff'};
  }
`;

export const CheckmarkSuccess = () => (
  <CheckmarkSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" success>
    <CheckmarkCircle cx="26" cy="26" r="25" fill="none"/>
    <CheckmarkPath fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
  </CheckmarkSvg>
);

export const CheckmarkError = () => (
  <CheckmarkSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" error>
    <CheckmarkCircle cx="26" cy="26" r="25" fill="none"/>
    <CheckmarkLine x1="15" y1="15" x2="37" y2="37"/>
    <CheckmarkLine x1="37" y1="15" x2="15" y2="37"/>
  </CheckmarkSvg>
);
