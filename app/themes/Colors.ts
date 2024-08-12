type ColorType =
  | 'primary'
  | 'black'
  | 'white'
  | 'overlay'
  | 'overlayDark'
  | 'light40'
  | 'lightGray'
  | 'inputBackground'
  | 'light80'
  | 'red'
  | 'green';

export const StaticColors: Record<ColorType, string> = {
  primary: '#47BA72',
  black: '#000000',
  white: '#ffffff',
  overlay: 'rgba(0,0,0,0.3)',
  overlayDark: 'rgba(0,0,0,0.5)',
  light40: '#6d6d6d',
  lightGray: '#D3D3D3',
  inputBackground: '#f2f2f2',
  light80: '#F8F8F8',
  red: '#ed2d43',
  green: '#3FAE29'
};
