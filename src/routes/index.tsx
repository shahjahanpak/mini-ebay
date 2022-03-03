import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import MainStack from './stacks/mainStack';

const Routes = () => {
  const {isLoggedIn} = useSelector((state: any) => state.root.user);
  return <>{isLoggedIn ? <MainStack /> : <AuthStack />}</>;
};

export default Routes;
