import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import FastImage, {Source} from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import {camera, closeIcon, gallary} from '../../../assets/icons';
import {COLORS, GST, RF} from '../../exporter';
import CustomText from '../customText';
const {COBALT, WHITE, SEA_BLUE} = COLORS;

interface Props {
  cropping?: boolean;
  visible: boolean;
  multiple?: boolean;
  toggleImagePicker: () => void;
  getSource: (image: Source) => void;
  includeVideo?: boolean;
}

interface FieldBtnProps {
  label: string;
  icon: Source;
  onPress: () => void;
  color: string;
  bgColor: string;
}

const CustomImageCropPicker = ({
  cropping = false,
  visible,
  toggleImagePicker,
  getSource,
  includeVideo,
  multiple = false,
}: Props) => {
  const PICKER_OPTIONS: any = {
    width: 500,
    height: 500,
    cropping,
    multiple,
    mediaType: includeVideo ? 'any' : 'photo',
    includeBase64: true,
  };

  const cameraPressHandler = () => {
    ImagePicker.openCamera(PICKER_OPTIONS)
      .then((res: any) => {
        toggleImagePicker();
        getSource(res);
      })
      .catch();
  };

  const gallaryPressHandler = () => {
    ImagePicker.openPicker(PICKER_OPTIONS).then((res: any) => {
      toggleImagePicker();
      getSource(res);
    });
  };

  return (
    <Overlay isVisible={visible} overlayStyle={styles.overlay}>
      <CustomText bold size={18} style={styles.uploadPhotoTxt}>
        Upload Photo
      </CustomText>
      <FieldBtn
        label={'Take Photo'}
        icon={camera}
        onPress={cameraPressHandler}
        color={WHITE}
        bgColor={SEA_BLUE}
      />
      <FieldBtn
        label={'Choose from Library'}
        icon={gallary}
        onPress={gallaryPressHandler}
        color={SEA_BLUE}
        bgColor={COBALT}
      />
      <Pressable style={styles.closeContainer} onPress={toggleImagePicker}>
        <FastImage source={closeIcon} style={styles.closeIcon} />
      </Pressable>
    </Overlay>
  );
};

const FieldBtn = ({label, icon, onPress, color, bgColor}: FieldBtnProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.btnContainer, {backgroundColor: bgColor}]}>
    <FastImage
      source={icon}
      resizeMode={'contain'}
      style={styles.icon}
      tintColor={color}
    />
    <CustomText size={14} style={styles.fieldBtnLabel} color={color}>
      {label}
    </CustomText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  overlay: {
    width: '70%',
    borderRadius: RF(12),
    padding: RF(16),
  },
  fieldBtnLabel: {
    paddingHorizontal: RF(16),
  },
  uploadPhotoTxt: {
    marginVertical: RF(8),
  },
  btnContainer: {
    alignItems: 'center',
    paddingHorizontal: RF(16),
    paddingVertical: RF(24),
    marginTop: RF(8),
  },
  icon: {
    width: RF(20),
    height: RF(20),
    marginBottom: RF(4),
  },
  closeContainer: {
    position: 'absolute',
    right: RF(4),
    top: RF(2),
    padding: RF(10),
  },
  closeIcon: {
    width: RF(20),
    height: RF(20),
  },
});

export default CustomImageCropPicker;
