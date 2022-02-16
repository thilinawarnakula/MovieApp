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
    height: 3,
  },
  tabStyle: {
    backgroundColor: COLORS.backgroundGray,
    paddingHorizontal: '30rem',
    marginTop: '5rem'
  },
  loadingView: {
    width: '60rem',
    height: '22rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;