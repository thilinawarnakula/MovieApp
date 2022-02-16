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
    safeAreaView: {
        backgroundColor: COLORS.headerWhite
    },
    header: {
        height: '60rem',
        backgroundColor: COLORS.headerWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '16rem',
    },
    title: {
        fontSize: '18rem',
        color: COLORS.black,
        fontWeight: '500',
        textAlign: 'left',
        marginLeft: '15rem',
        width: '200rem',
        lineHeight: '22rem',
    },
    backIconContainer: {
        justifyContent: 'center'
    },
    favIconContainer: {
        textAlign: 'right',
    },
    backIcon: {
        width: '40rem',
        height: '40rem',
        resizeMode: 'contain',
    },
});

export default style;
