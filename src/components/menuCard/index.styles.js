import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const cardHeight = 150;

const style = EStyleSheet.create({
    cardGrid: {
        borderRadius: '15rem',
        marginEnd: 40,
        width: 200
    },
    cardList: {
        height: cardHeight,
        marginTop: '30rem',
        marginBottom: '50rem',
        borderRadius: '15rem',
    },
    image: {
        width: '100%',
        height: cardHeight - 20,
        borderRadius: '15rem',
        alignItems: 'center'
    },
    detailsContainer: {
        marginTop: '15rem',
        alignItems: 'center',
    },
    title: {
        color: COLORS.black,
        textAlign: 'center',
        marginHorizontal: '5rem'
    },
});

export default style;
