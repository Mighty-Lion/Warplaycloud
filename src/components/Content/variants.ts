export const slidingVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  },
  hidden: (custom: boolean) => ({
    opacity: 0,
    x: custom ? '-100vw' : '100vw',
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  }),
};
