import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import ProductCard from '../../../shared/components/productCard';
import Wrapper from '../../../shared/components/wrapper';
import {GST} from '../../../shared/exporter';
import styles from './styles';

interface Props {
  route: RouteProp<{
    params: {
      data: any;
    };
  }>;
}

const ProductDetails = ({route}: Props) => {
  const data = route.params.data;
  return (
    <Wrapper backBtn>
      <View style={styles.mainContainer}>
        <ProductCard {...data} />
      </View>
    </Wrapper>
  );
};

export default ProductDetails;
