const animeOpts = {
  whileInView: {
    x: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    bounce: 0.2,
    duration: 0.8,
  },
  viewport: {
    amount: 0.6,
  },
};
export const leftAnime = {
  initial: {
    x: -40,
    opacity: 0,
  },
  ...animeOpts,
};
export const rightAnime = {
  initial: {
    x: 40,
    opacity: 0,
  },
  ...animeOpts,
};
