import {StyleSheet} from 'react-native';
import {COLORS, RF} from '../../../shared/exporter';
const {SILVER, COBALT, WHITE} = COLORS;

const styles = StyleSheet.create({
  imageBannerContainer: {
    justifyContent: 'center',
    backgroundColor: SILVER,
    alignItems: 'center',
    width: '50%',
    height: RF(100),
    borderWidth: 0.5,
    borderColor: COBALT,
    marginBottom: RF(25),
  },
  whiteBG: {
    backgroundColor: WHITE,
  },
  bannerImage: {
    height: '100%',
    width: '100%',
  },
  uploadIcon: {
    width: RF(30),
    height: RF(30),
  },
});

export default styles;
