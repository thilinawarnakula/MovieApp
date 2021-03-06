import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    loadingView: {
        width: '120rem',
        height: '35rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: '14rem',
        color: COLORS.textGray,
        marginTop: '5rem'
    }
});

export default style;
