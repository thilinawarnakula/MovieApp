import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    COLORS
} from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    container: {
        backgroundColor: COLORS.transparent,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitleMain: {
        fontSize: '18rem',
        color: COLORS.black,
        textAlign: 'center',
        marginTop: '08rem',
    },
    textTitleSub: {
        fontSize: '14rem',
        color: COLORS.black,
        marginTop: '8rem',
        textAlign: 'center'
    },
});

export default style;
