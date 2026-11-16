export type Didactic = {
  origin: string[];
  construction: string[];
  examples: { title: string; steps: string[] }[];
  application: string[];
  traps: string[];
  bibliography: { book: string; place: string; note: string }[];
};
