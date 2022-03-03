import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import AddProduct from '../../../screens/main/addProduct';
import Home from '../../../screens/main/home';
import ProductDetails from '../../../screens/main/productDetails';
import {ROUTES} from '../../../shared/exporter';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen
          name={ROUTES.PRODUCT_DETAILS}
          component={ProductDetails}
        />
        <Stack.Screen name={ROUTES.ADD_PRODUCT} component={AddProduct} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
