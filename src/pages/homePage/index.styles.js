import {
  Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { COLORS } from '../../utilities/colors';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundGray,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorStyle: {
    backgroundColor: COLORS.primary,
    height: '3rem',
  },
  tabStyle: {
    backgroundColor: COLORS.transparent,
    paddingHorizontal: '30rem',
    marginHorizontal : '70rem'
  },
  loadingView: {
    width: '60rem',
    height: '22rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;