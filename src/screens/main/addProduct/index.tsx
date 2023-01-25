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
  addNewProduct,
  COLORS,
  GST,
  ProductSchema,
  setUserSession,
  showToast,
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

  const submitHandler = ({title, price, desc}: any, {setSubmitting}: any) => {
    if (productImage) {
      dispatch(addNewProduct({title, price, desc, image: productImage}));
      setSubmitting(false);
      showToast('Success', 'Product has been added successfully!', true);
      navigation.goBack();
    } else {
      setSubmitting(false);
      showToast('Error', 'Select product photo!', false);
    }
  };

  return (
    <Wrapper backBtn headerTitle={'Add New Product'}>
      <View style={GST.MAINT_CONTAINER}>
        <Formik
          initialValues={initialValues}
          validationSchema={ProductSchema}
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
                keyboardType={'decimal-pad'}
                onChangeText={handleChange('price')}
                returnKeyType={'next'}
                blurOnSubmit={false}
                onSubmitEditing={() => descRef.current.focus()}
                error={touched.price && errors.price ? errors.price : ''}
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
                error={touched.desc && errors.desc ? errors.desc : ''}
              />
              <ImageBanner
                text={'Upload photo here'}
                source={productImage}
                onPress={toggleImagePicker}
              />
              <CustomImageCropPicker
                visible={showImagePicker}
                toggleImagePicker={toggleImagePicker}
                getSource={(image: any) => setProductImage(image.path)}
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
