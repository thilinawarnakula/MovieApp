import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    selectionView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',
        marginTop: '20rem',
        marginRight:'10rem'
    },
});

export default style;
