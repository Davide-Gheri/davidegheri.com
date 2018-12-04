
export * from './portfolio';
export * from './contact';
export * from './about';
export * from './contact';
export * from './footer';
export * from './tag';
export * from './site';
export * from './seo';
export * from './common';

export type Pick2<T, K1 extends keyof T, K2 extends keyof T[K1]> = {
  [P1 in K1]-?: {
    [P2 in K2]-?: (T[K1])[P2];
  };
};

export type Pick3<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]> = {
  [P1 in K1]-?: {
    [P2 in K2]-?: {
      [P3 in K3]-?: ((T[K1])[K2])[P3];
    };
  };
};
