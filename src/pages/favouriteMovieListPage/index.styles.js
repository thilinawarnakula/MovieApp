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
        alignItems:'center',
        marginTop : '20rem'
    },
    listViewContainer:{
        padding: '20rem',
    },
    loaderContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop : '50rem'
    },
    loadingView :{
        width : '60rem',
        height : '22rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default style;
