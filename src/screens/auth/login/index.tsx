import {Formik} from 'formik';
import React, {useState} from 'react';
import Input from '../../../shared/components/input';
import Wrapper from '../../../shared/components/wrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  GST,
  LoginSchema,
  navigate,
  ROUTES,
  setUserSession,
} from '../../../shared/exporter';
import {lock, mail} from '../../../assets/icons';
import {Pressable, View} from 'react-native';
import styles from './styles';
import SubmitBtn from '../../../shared/components/submitBtn';
import CustomLoading from '../../../shared/components/customLoading';
import {useDispatch} from 'react-redux';
import CustomText from '../../../shared/components/customText';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = ({email, password}: any, {setSubmitting}: any) => {
    dispatch(setUserSession(true));
    setSubmitting(false);
  };

  return (
    <Wrapper headerTitle={'Login'}>
      <View style={GST.MAINT_CONTAINER}>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={submitHandler}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={GST.CONTENT_CONTAINER}>
              <Input
                title={'Email'}
                textContentType={'emailAddress'}
                value={values.email}
                autoCapitalize={'none'}
                placeholder={'Email'}
                leftIcon={mail}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                error={touched.email && errors.email ? errors.email : ''}
              />
              <Input
                returnKeyType={'done'}
                onSubmitEditing={handleSubmit}
                value={values.password}
                placeholder={'Password'}
                textContentType={'password'}
                title={'Password'}
                leftIcon={lock}
                onChangeText={handleChange('password')}
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                secureTextEntry={!showPassword}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <SubmitBtn title={'Login'} onPress={handleSubmit} />
              <CustomLoading visible={isSubmitting} />
            </KeyboardAwareScrollView>
          )}
        </Formik>
        <View style={GST.BOTTOM_BTN_CONTANIER}>
          <Pressable onPress={() => navigate(ROUTES.SIGNUP)}>
            <CustomText bold size={18}>
              Sign up
            </CustomText>
          </Pressable>
        </View>
      </View>
    </Wrapper>
  );
};

export default Login;
