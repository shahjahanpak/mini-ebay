import React, {ReactChild} from 'react';
import {Pressable, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS, GST, navigationRef, RF} from '../../exporter';
import CustomText from '../customText';
const {WHITE, BLACK, GRADIENT_A, GRADIENT_B} = COLORS;

interface Props {
  children: ReactChild;
  backBtn: boolean;
  headerTitle: string;
  customLeftBtn: any;
  customRightBtn: any;
}

const Wrapper = ({
  children,
  backBtn,
  headerTitle,
  customLeftBtn,
  customRightBtn,
}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <LinearGradient colors={[GRADIENT_A, GRADIENT_B]} style={GST.FLEX}>
        <View
          style={[
            styles.container,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            },
          ]}>
          <Header
            title={headerTitle}
            backBtn={backBtn}
            customLeftBtn={customLeftBtn}
            customRightBtn={customRightBtn}
          />
          {children}
        </View>
      </LinearGradient>
    </>
  );
};

interface PROPS {
  backBtn: Boolean;
  title: string;
  customLeftBtn: any;
  customRightBtn: any;
}
const Header = ({
  backBtn,
  title,
  customLeftBtn,
  customRightBtn,
}: Partial<PROPS>) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        {backBtn && (
          <Pressable
            onPress={() => navigationRef.current.goBack()}
            hitSlop={GST.HITSLOP}>
            <Icon name="chevron-thin-left" color={BLACK} size={RF(15)} />
          </Pressable>
        )}
        {customLeftBtn}
      </View>
      <View>
        <CustomText bold color={BLACK} size={18}>
          {title}
        </CustomText>
      </View>
      <View>{customRightBtn}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: RF(8),
    paddingHorizontal: RF(16),
    paddingBottom: RF(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Wrapper;
