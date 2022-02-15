import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContainer: {
    
    },
    playListNameText: {
        color: COLORS.textGray,
        fontSize: '18rem',
        textAlign: 'left',
        flex: 1,
        marginLeft: '3rem',
        marginVertical: '10rem',
    }
});

export default style;
