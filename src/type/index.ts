// TYPES

/**
 * @description Used to check variant prop for typography elements
 */
export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'body1'
  | 'body2'
  | 'buttonLarge'
  | 'buttonMedium';

/**
 * @description Used to make sure that only theme colors are passed as prop
 */
export type ColorsVariants =
  | '#3f51b5'
  | '#28abe2'
  | '#7bc67e'
  | '#F44336'
  | 'rgba(0, 0, 0, 0.6)'
  | '#fff';

/**
 * @description Used to check variant prop for button elements
 */
export type ButtonVariants = 'outlined' | 'contained';

/**
 * @description Used to check size prop for button elements
 */
export type ButtonSize = 'large' | 'small';

/**
 * Used to check possible options of channels
 */
export type ChannelOptions = [
  'SEA',
  'Display',
  'Social',
  'Affiliate',
  'Remarketing'
];

/**
 * Used to check name prop for radio elements
 */
export type Channels =
  | 'SEA'
  | 'Display'
  | 'Social'
  | 'Affiliate'
  | 'Remarketing';

/**
 * Used to check last type display error on either on of the strings below
 */
export type TypeVariants = 'title' | 'startDate' | 'endDate';

/**
 * Used to choose between light and dark mode
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Used to determine which value a radio can take
 */
export type RadioType = 'constant' | 'exclude';

/**
 * Available options to select a channel
 */
export type ChannelOption = {
  id: number;
  text: Channels;
};

/**
 * Available keys of a channel item
 */
export type ChannelItemKeys = 'text' | 'radio';
