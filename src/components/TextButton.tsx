import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

interface TextButtonProps {
  label: string;
  customContainerStyle?: StyleProp<ViewStyle>;
  customLabelStyle?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void;
}

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}: TextButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.green,
        },
        customContainerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            color: COLORS.white,
            ...FONTS.h3,
          },
          customLabelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
