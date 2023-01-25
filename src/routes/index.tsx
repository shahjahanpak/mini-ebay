import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import MainStack from './stacks/mainStack';

const Routes = () => {
  const {isLoggedIn} = useSelector((state: any) => state.root.user);
  // return <>{isLoggedIn ? <MainStack /> : <AuthStack />}</>;
  return <Test />;
};

export default Routes;

const Test = () => {
  return <View></View>;
};
