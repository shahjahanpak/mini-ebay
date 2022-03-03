import React, {forwardRef} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, GST, RF} from '../../exporter';
import CustomText from '../customText';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';

const {COBALT, BLACK, GRAY, DARK_RED, SILVER} = COLORS;

interface InputProp extends TextInputProps {
  title: any;
  titleColor: string;
  containerStyle: ViewStyle;
  leftIcon?: any;
  error: any;
  showPassword: boolean;
  toggleShowPassword: () => void;
  iconColor: string;
}

const Input = forwardRef((props: Partial<InputProp>, ref: any) => {
  const {
    title,
    titleColor = BLACK,
    leftIcon,
    error,
    containerStyle,
    showPassword,
    value,
    toggleShowPassword,
    iconColor,
    textContentType,
    multiline,
    editable = true,
  } = props;

  return (
    <View style={styles.mainContainer}>
      {!!title && (
        <CustomText bold color={titleColor} style={styles.title}>
          {title}
        </CustomText>
      )}
      <View
        style={[
          styles.subContainer,
          containerStyle,
          !!error && styles.errorContainer,
          multiline && styles.flexStart,
        ]}>
        {!!leftIcon && (
          <FastImage
            source={leftIcon}
            style={[styles.leftIcon, {borderColor: iconColor}]}
            resizeMode={'contain'}
            tintColor={COBALT}
          />
        )}
        <TextInput
          ref={ref}
          pointerEvents={editable ? 'auto' : 'none'}
          {...props}
          style={[styles.input, multiline && styles.multiline]}
          placeholderTextColor={GRAY}
        />
        {!!value && textContentType === 'password' && (
          <Pressable onPress={toggleShowPassword}>
            <FontAwesomeIcon
              name={showPassword ? 'eye' : 'eye-slash'}
              color={GRAY}
              size={RF(15)}
            />
          </Pressable>
        )}
      </View>
      {!!error && <CustomText style={GST.ERROR}>{error}</CustomText>}
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: RF(20),
  },
  errorContainer: {
    borderWidth: 0.5,
    borderColor: DARK_RED,
  },
  title: {
    marginBottom: RF(4),
  },
  input: {
    flex: 1,
    paddingRight: RF(14),
    fontFamily: FONTS.REGULAR,
    color: BLACK,
    fontSize: RF(14),
    paddingVertical: RF(2),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RF(20),
    paddingVertical: RF(12),
    backgroundColor: SILVER,
    borderWidth: 0.5,
    borderColor: COBALT,
  },
  multiline: {
    height: RF(80),
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  leftIcon: {
    width: RF(18),
    height: RF(18),
    marginRight: RF(12),
  },
});

export default Input;
