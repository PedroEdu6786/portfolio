export const container = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      staggerChildren: 1,
      default: { duration: 1 },
    },
  },
}

export const containerProject = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      staggerChildren: 1,
      default: { duration: 0.3 },
    },
  },
}

export const containerHero = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 2,
      default: { duration: 1 },
    },
  },
}

export const containerHeader = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}
