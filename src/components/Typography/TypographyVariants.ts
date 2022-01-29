import { theme } from '@theme/index';

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: theme.fontWeight.light,
    color: theme.colors.secondary,
    letterSpacing: '0.25px',
  },

  h2: {
    fontSize: 20,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.success,
    letterSpacing: '0.15px',
  },

  body1: {
    fontSize: 16,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.text,
    letterSpacing: '0.15px',
  },

  body2: {
    fontSize: 14,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.text,
    letterSpacing: '0.10px',
  },

  buttonLarge: {
    fontSize: 15,
    fontWeight: 500,
    color: theme.colors.white,
    letterSpacing: '0.46px',
    textTransform: 'uppercase',
  },

  buttonMedium: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.white,
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
  },
};
