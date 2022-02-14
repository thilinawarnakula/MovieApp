import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { COLORS } from '../../utilities/colors';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

import { getResponsiveWidth } from '../../utilities/dimensions';

const PROFILE_IMAGE_WIDTH = getResponsiveWidth(30);
const PROFILE_IMAGE_HEIGHT = getResponsiveWidth(40);

const styles = EStyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bannerImage:{
    height : '250rem',
    opacity: .9
  },
  metaDataContainer:{
    flexDirection: 'row'
  },
  watchVideoTitle:{
    color:COLORS.red,
    marginLeft:'10rem',
    marginTop:'5rem',
    fontSize : '16rem',
    textDecorationLine: 'underline'
  },
  profileImage:{
    height:PROFILE_IMAGE_HEIGHT,
    width: PROFILE_IMAGE_WIDTH,
    marginLeft: '40rem',
    marginTop: - 60,
    borderRadius: 0,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowRadius: 30,
    elevation: 10,
    borderRadius: 8
  },
  videoNameText: {
    color: COLORS.white,
    fontWeight: '900',
    width: entireScreenWidth / 2 - 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    fontSize: '14rem',
    textShadowOffset: {
      width: 2, height: 2
    },
    textShadowRadius: 10,
    textShadowColor: COLORS.gray3,

    marginTop: 2,
    fontWeight: "bold",
    color: COLORS.white
  },
  iconShadow: {
    textShadowOffset: {
      width: 2, height: 2
    },
    textShadowRadius: 15,
    textShadowColor: COLORS.gray3
  },
  videoDetails: {
    marginTop : 20,
    marginHorizontal:15,
    borderRadius: 30,
    backgroundColor: COLORS.gray2,  
    padding : 8,
    marginBottom : 10,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default styles;