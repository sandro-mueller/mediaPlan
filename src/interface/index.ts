// INTERFACES
export interface Colors {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    text: string;
    white: string;
  };
}

export interface Baseline {
  baseline: {
    b1: number;
    b2: number;
    b3: number;
    b4: number;
    b5: number;
    b6: number;
    b7: number;
    b8: number;
  };
}

export interface FontWeights {
  fontWeight: {
    thin: number;
    light: number;
    regular: number;
    medium: number;
    bold: number;
    black: number;
  };
}

export interface Easing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}

export interface Duration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}

export interface BreakPoints {
  breakPoints: Array<number>;
}

// TYPES
export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'body1'
  | 'body2'
  | 'buttonLarge'
  | 'buttonMedium';

export type ColorsVariants =
  | '#3f51b5'
  | '#28abe2'
  | '#7bc67e'
  | '#F44336'
  | 'rgba(0, 0, 0, 0.6)'
  | '#fff';

export type ButtonVariants = 'outlined' | 'contained';
export type ButtonSize = 'large' | 'small';

export type ChannelOptions = [
  'SEA',
  'Display',
  'Social',
  'Affiliate',
  'Remarketing'
];
