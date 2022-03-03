import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import Input from '../../../shared/components/input';
import Wrapper from '../../../shared/components/wrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  GST,
  LoginSchema,
  navigate,
  navigationRef,
  ROUTES,
  setUserSession,
  SignupSchema,
} from '../../../shared/exporter';
import {lock, mail, user} from '../../../assets/icons';
import {Pressable, View} from 'react-native';
import styles from './styles';
import SubmitBtn from '../../../shared/components/submitBtn';
import CustomLoading from '../../../shared/components/customLoading';
import {useDispatch} from 'react-redux';
import CustomText from '../../../shared/components/customText';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState({
    fieldA: false,
    fieldB: false,
  });
  const dispatch = useDispatch();
  const lastNameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const confirmPasswordRef: any = useRef();

  const toggleShowPassword = (field: string) => {
    setShowPassword((prev: any) => ({...prev, [field]: !prev[field]}));
  };

  const submitHandler = ({email, password}: any, {setSubmitting}: any) => {
    dispatch(setUserSession(true));
    setSubmitting(false);
  };

  return (
    <Wrapper headerTitle={'Sign up'}>
      <View style={GST.MAINT_CONTAINER}>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
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
                title={'First Name'}
                value={values.firstName}
                placeholder={'First Name'}
                leftIcon={user}
                onChangeText={handleChange('firstName')}
                returnKeyType={'next'}
                blurOnSubmit={false}
                onSubmitEditing={() => lastNameRef.current.focus()}
                error={
                  touched.firstName && errors.firstName ? errors.firstName : ''
                }
              />
              <Input
                ref={lastNameRef}
                returnKeyType={'next'}
                blurOnSubmit={false}
                onSubmitEditing={() => emailRef.current.focus()}
                title={'Last Name'}
                value={values.lastName}
                placeholder={'Last Name'}
                leftIcon={user}
                onChangeText={handleChange('lastName')}
                error={
                  touched.lastName && errors.lastName ? errors.lastName : ''
                }
              />
              <Input
                ref={emailRef}
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
                ref={passwordRef}
                returnKeyType={'next'}
                blurOnSubmit={false}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                value={values.password}
                placeholder={'Password'}
                title={'Password'}
                textContentType={'password'}
                leftIcon={lock}
                onChangeText={handleChange('password')}
                showPassword={showPassword.fieldA}
                toggleShowPassword={() => toggleShowPassword('fieldA')}
                secureTextEntry={!showPassword.fieldA}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <Input
                ref={confirmPasswordRef}
                returnKeyType={'done'}
                onSubmitEditing={handleSubmit}
                value={values.confirmPassword}
                placeholder={'Password'}
                title={'Confirm Password'}
                textContentType={'password'}
                leftIcon={lock}
                onChangeText={handleChange('confirmPassword')}
                showPassword={showPassword.fieldB}
                toggleShowPassword={() => toggleShowPassword('fieldB')}
                secureTextEntry={!showPassword.fieldB}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />
              <SubmitBtn title={'Sign up'} onPress={handleSubmit} />
              <CustomLoading visible={isSubmitting} />
            </KeyboardAwareScrollView>
          )}
        </Formik>
        <View style={GST.BOTTOM_BTN_CONTANIER}>
          <Pressable onPress={() => navigation.goBack()}>
            <CustomText bold size={18}>
              Login
            </CustomText>
          </Pressable>
        </View>
      </View>
    </Wrapper>
  );
};

export default Signup;
