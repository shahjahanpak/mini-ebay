import {StyleSheet} from 'react-native';
import {COLORS, RF} from '../exporter';

export const GST = StyleSheet.create({
  FLEX: {
    flex: 1,
  },
  ERROR: {
    marginTop: RF(2),
    fontSize: RF(10),
    color: COLORS.DARK_RED,
  },
  SHADOW: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  DIVIDER: {
    borderBottomColor: COLORS.COBALT,
    borderBottomWidth: 1,
  },
  MAINT_CONTAINER: {
    flex: 1,
    paddingHorizontal: RF(20),
  },
  CONTENT_CONTAINER: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  BOTTOM_BTN_CONTANIER: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: RF(10),
  },
});
