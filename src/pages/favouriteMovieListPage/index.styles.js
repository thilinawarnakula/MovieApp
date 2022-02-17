import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: COLORS.backgroundGray,
    },
    filterContainer:{
        backgroundColor: COLORS.backgroundGray,
        alignItems:'center',
        marginTop : '20rem'
    },
    listViewContainer:{
        padding: '20rem',
    },
});

export default style;
