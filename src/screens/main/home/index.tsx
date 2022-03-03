import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import CustomText from '../../../shared/components/customText';
import ProductCard from '../../../shared/components/productCard';
import Wrapper from '../../../shared/components/wrapper';
import {
  COLORS,
  GST,
  navigate,
  RF,
  ROUTES,
  setUserSession,
} from '../../../shared/exporter';
import styles from './styles';

const {SEA_BLUE, DARK_RED} = COLORS;

const Home = () => {
  const {products} = useSelector((state: any) => state.root.main);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(setUserSession(false));
  };

  return (
    <Wrapper
      headerTitle={'Products'}
      customLeftBtn={
        <MenuBtn
          title={'LOGOUT'}
          icon={'logout'}
          color={DARK_RED}
          onPress={logoutHandler}
        />
      }
      customRightBtn={
        <MenuBtn
          title={'ADD'}
          icon={'plus-box'}
          color={SEA_BLUE}
          onPress={() => navigate(ROUTES.ADD_PRODUCT)}
        />
      }>
      <View style={GST.FLEX}>
        <FlatList
          data={products}
          keyExtractor={(_, index) => String(index)}
          renderItem={({item}) => (
            <ProductCard
              {...item}
              listView
              onPress={() => navigate(ROUTES.PRODUCT_DETAILS, {data: item})}
            />
          )}
        />
      </View>
    </Wrapper>
  );
};

const MenuBtn = ({
  title,
  icon,
  color,
  onPress,
}: {
  title: string;
  icon: string;
  color: any;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.menuBtnContainer} onPress={onPress}>
    <Icon name={icon} size={RF(30)} color={color} />
    <CustomText color={color} size={8}>
      {title}
    </CustomText>
  </TouchableOpacity>
);

export default Home;
