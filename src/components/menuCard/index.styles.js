import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const cardHeight = 160;

const style = EStyleSheet.create({
    cardGrid: {
        borderRadius: '6rem',
        marginEnd: 20,
        width: 250,
        shadowColor: COLORS.black,
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius:2.62,
    },
    cardList: {
        height: 'auto',
        borderRadius: '6rem',
        marginBottom:'8rem',
        shadowColor: COLORS.black,
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius:2.62,
    },
    image: {
        width: '100%',
        height: cardHeight ,
        borderRadius: '6rem',
        alignItems: 'center'
    },
    detailsContainer: {
        padding: '10rem',
        alignItems: 'center',
    },
    title: {
        color: COLORS.textGray,
        textAlign: 'center',
        marginHorizontal: '5rem',
        fontSize: '16rem',
    },
});

export default style;
