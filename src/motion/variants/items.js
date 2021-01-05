export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const itemLeft = {
  hidden: { opacity: 0, x: '-100%' },
  show: { opacity: 1, x: 0, transition: { delay: 2.5, duration: 1 } },
}

export const itemDown = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 3.5, duration: 1 } },
}
