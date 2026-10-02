export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_PREMIUM },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
