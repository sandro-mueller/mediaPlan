import facepaint from 'facepaint';

export const createMediaQueries = (...breakpoints: number[]) => {
  return facepaint(
    breakpoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
  );
};
