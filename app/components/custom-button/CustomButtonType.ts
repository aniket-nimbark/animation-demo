import { TouchableOpacityProps, ViewStyle } from 'react-native';

interface CustomButtonPropType {
  title: string;
  loading: boolean;
  customStyle?: ViewStyle;
}

export type CustomButtonType = (
  props: TouchableOpacityProps & CustomButtonPropType,
) => React.JSX.Element;
