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
        borderRadius: '10rem',
        marginEnd: 20,
        width: 250,
    },
    cardList: {
        height: 'auto',
        borderRadius: '10rem',
        marginBottom:'8rem'
    },
    image: {
        width: '100%',
        height: cardHeight ,
        borderRadius: '10rem',
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
