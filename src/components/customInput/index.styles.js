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
    mainView :{
        flexDirection: 'column',
    },
    textInputView :{
        height: '55rem',
        width: entireScreenWidth - 40,
        backgroundColor: COLORS.white,
        elevation: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        shadowColor: COLORS.black,
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius:2.62,
        paddingLeft: '20rem',
    },
    input: {
        flex:9,
        color: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15rem',
    },
    textClearContainer:{
        flex:1,
        marginHorizontal : '10rem'
    },
});

export default style;
