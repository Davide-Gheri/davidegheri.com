import { PortfolioNode, TagNode } from '@interfaces';

export * from './styled';
export * from './jsonSchema';

export const portfolioUrl = (slug: string | PortfolioNode) => {
  if (typeof slug === 'object') {
    return `/portfolio/${slug.slug}`;
  }
  return `/portfolio/${slug}`;
};

export const tagUrl = (slug: string | TagNode) => {
  if (typeof slug === 'object') {
    return `/tags/${slug.slug}`;
  }
  return `/tags/${slug}`;
};

export function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const newHex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : {r: '', g: '', b: ''};
}

export function randomValue(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffleArray(array: any[]) {
  const ar = [...array];
  for (let i = ar.length - 1; i > 0; i--) { // tslint:disable-line no-increment-decrement
    const j = Math.floor(Math.random() * (i + 1));
    [ar[i], ar[j]] = [ar[j], ar[i]];
  }
  return ar;
}

export const encode = (data: {[key: string]: string}) => {
  return Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');
};
