import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Login from '../../../screens/auth/login';
import Signup from '../../../screens/auth/signup';
import {ROUTES} from '../../../shared/exporter';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.SIGNUP} component={Signup} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
