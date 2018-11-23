import { PortfolioNode, TagNode } from '../interfaces';

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
