import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    focusTitle:{
        fontSize: '16rem',
        color: COLORS.black,
        marginTop: '5rem'
    },
    inFocusTitle:{
        fontSize: '18rem',
        color: COLORS.textGray,
        marginTop: '5rem'
    }
});

export default style;
