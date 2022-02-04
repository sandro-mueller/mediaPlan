import { theme } from '@theme/index';
import { ThemeMode } from '@type/index';

export const useToggleTheme = (mode: ThemeMode) => {
  if (mode === 'dark') {
    theme.colors.white = '#212121';
    theme.colors.text = 'rgba(255, 255, 255, 0.6)';
  }

  if (mode === 'light') {
    theme.colors.white = '#fff';
    theme.colors.text = 'rgba(0, 0, 0, 0.6)';
  }

  return theme;
};
