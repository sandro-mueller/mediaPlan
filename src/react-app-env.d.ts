/// <reference types="react-scripts" />

import { ThemeProvider } from '@emotion/react';

declare module '@components';
declare module '@assets';
declare module '@constants';
declare module '@theme';
declare module '@interface';
declare module '@type';
declare module '@utils';
declare module '@store';
declare module '@api';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      error: string;
      text: string;
      white: string;
    };

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

    fontWeight: {
      thin: number;
      light: number;
      regular: number;
      medium: number;
      bold: number;
      black: number;
    };

    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };

    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };

    zIndex: {
      modal: number;
    };

    breakPoints: Array<number>;

    ThemeProvider: ThemeProvider;
  }
}
