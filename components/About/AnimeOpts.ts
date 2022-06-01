export const animeOpts = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  transition: {
    type: "spring",
    bounce: 0.15,
    duration: 0.4,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  viewport: {
    amount: 0.75,
  },
};
