import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS, RF} from '../../exporter';
import CustomText from '../customText';
const {WHITE, COBALT, BRIGHT_GRAY} = COLORS;

interface Props {
  image: any;
  title: string;
  desc: string;
  price: number;
  onPress?: () => void;
  listView?: boolean;
}

const ProductCard = ({image, title, price, desc, onPress, listView}: Props) => {
  return (
    <Pressable
      style={[styles.productCardMainContainer, listView && styles.divider]}
      onPress={onPress}>
      <View
        style={[
          styles.productImgContainer,
          listView && styles.listViewImgContainer,
        ]}>
        <FastImage
          source={image}
          style={styles.productImg}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.titleContainer}>
        <CustomText bold size={15}>
          {title}
        </CustomText>
        <CustomText bold size={15}>
          ${price}
        </CustomText>
      </View>
      <View style={styles.descContainer}>
        {!listView && (
          <CustomText color={BRIGHT_GRAY} size={13}>
            {desc}
          </CustomText>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productCardMainContainer: {
    marginBottom: RF(20),
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: COBALT,
    paddingBottom: RF(4),
  },
  productImg: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2,
  },
  productImgContainer: {
    backgroundColor: WHITE,
    padding: RF(20),
  },
  listViewImgContainer: {
    marginHorizontal: RF(20),
    borderRadius: RF(10),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RF(10),
    marginHorizontal: RF(20),
  },
  descContainer: {
    marginHorizontal: RF(20),
  },
});

export default ProductCard;
