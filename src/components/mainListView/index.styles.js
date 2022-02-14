import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContainer: {
        marginVertical: '15rem',
    },
    playListNameText: {
        color: COLORS.gray1,
        fontSize: '18rem',
        fontWeight: '700',
        textAlign: 'left',
        flex: 1,
        marginLeft: '3rem',
        marginTop: '10rem'
    }
});

export default style;
