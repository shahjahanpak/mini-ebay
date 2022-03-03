import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {Pressable, View} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch} from 'react-redux';
import {dollar, titleIcon, uploadIcon} from '../../../assets/icons';
import CustomImageCropPicker from '../../../shared/components/customImageCropPicker';
import CustomLoading from '../../../shared/components/customLoading';
import CustomText from '../../../shared/components/customText';
import Input from '../../../shared/components/input';
import SubmitBtn from '../../../shared/components/submitBtn';
import Wrapper from '../../../shared/components/wrapper';
import {
  COLORS,
  GST,
  setUserSession,
  SignupSchema,
} from '../../../shared/exporter';
import styles from './styles';

const {COBALT, BLACK} = COLORS;

const initialValues = {
  title: '',
  price: '',
  desc: '',
};

const AddProduct = ({navigation}: any) => {
  const [showImagePicker, setShowImagePicker] = useState(false);
  const dispatch = useDispatch();
  const priceRef: any = useRef();
  const [productImage, setProductImage] = useState<any>();
  const descRef: any = useRef();

  const toggleImagePicker = () => {
    setShowImagePicker(!showImagePicker);
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
                title={'Title'}
                value={values.title}
                placeholder={'Title'}
                leftIcon={titleIcon}
                onChangeText={handleChange('title')}
                returnKeyType={'next'}
                blurOnSubmit={false}
                onSubmitEditing={() => priceRef.current.focus()}
                error={touched.title && errors.title ? errors.title : ''}
              />
              <Input
                ref={priceRef}
                title={'Price'}
                value={values.price}
                placeholder={'Price'}
                leftIcon={dollar}
                onChangeText={handleChange('price')}
                returnKeyType={'next'}
                blurOnSubmit={false}
                onSubmitEditing={() => descRef.current.focus()}
                error={touched.title && errors.title ? errors.title : ''}
              />
              <Input
                multiline
                ref={descRef}
                title={'Description'}
                value={values.desc}
                placeholder={'Description'}
                onChangeText={handleChange('desc')}
                returnKeyType={'done'}
                blurOnSubmit={false}
                onSubmitEditing={handleSubmit}
                error={touched.title && errors.title ? errors.title : ''}
              />
              <ImageBanner
                text={'Upload your logo here'}
                source={productImage}
                onPress={toggleImagePicker}
                resizeMode={'contain'}
              />
              <CustomImageCropPicker
                visible={showImagePicker}
                toggleImagePicker={toggleImagePicker}
                getSource={(image: Source) => setProductImage(image.uri)}
              />
              <SubmitBtn title={'Add'} onPress={handleSubmit} />
              <CustomLoading visible={isSubmitting} />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </Wrapper>
  );
};

const ImageBanner = ({
  source,
  text,
  onPress,
  resizeMode = 'cover',
}: {
  source: any;
  text: string;
  onPress: () => void;
  resizeMode?: any;
}) => (
  <Pressable
    style={[styles.imageBannerContainer, !!source && styles.whiteBG]}
    onPress={onPress}>
    {source ? (
      <FastImage
        source={{uri: source}}
        style={styles.bannerImage}
        resizeMode={resizeMode}
      />
    ) : (
      <>
        <FastImage
          source={uploadIcon}
          style={styles.uploadIcon}
          tintColor={BLACK}
        />
        <CustomText color={COBALT}>{text}</CustomText>
      </>
    )}
  </Pressable>
);

export default AddProduct;
