import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { COLORS } from '../../utilities/colors';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

import { getResponsiveWidth } from '../../utilities/dimensions';

const PROFILE_IMAGE_WIDTH = getResponsiveWidth(30);


const styles = EStyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: COLORS.backgroundGray,
  },
  bannerImage:{
    height : '250rem',
    opacity: .9,
    marginTop: -20
  },
  metaDataContainer:{
    flexDirection: 'row',
  },
  watchVideoTitle:{
    color:COLORS.textRed,
    marginLeft:'10rem',
    marginTop:'5rem',
    fontSize : '14rem',
    textDecorationLine: 'underline'
  },
  profileImage:{
    flex:1,
    width: PROFILE_IMAGE_WIDTH,
    marginLeft: '15rem',
    marginTop: - 80,
    backgroundColor: COLORS.transparent,
    borderRadius: '8rem',
    shadowColor: COLORS.black,
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius:2.62,
    elevation: 10,
  },
  videoNameText: {
    color: COLORS.white,
    fontWeight: '900',
    width: entireScreenWidth / 2 - 10,
    position: 'absolute',
    right: 0,
    bottom: 15,
    fontSize: '14rem',
    textShadowOffset: {
      width: 2, height: 2
    },
    textShadowRadius: 10,
    textShadowColor: COLORS.shadowGray,
    fontWeight: "bold",
    color: COLORS.white
  },
  iconShadow: {
    textShadowOffset: {
      width: 2, height: 2
    },
    textShadowRadius: 15,
    textShadowColor: COLORS.shadowGray
  },
  videoDetails: {
    marginTop : 20,
    marginHorizontal: 10,
    borderRadius: 30,
    padding : 8,
    marginBottom : 10,
    justifyContent:'center',
    alignItems:'center',
  },
  ratingContainer:{
    paddingHorizontal : '12rem',
    marginTop: - 18,
  },
  title:{
    fontSize: '14rem',
    textAlign:'left',
    color:COLORS.textGray
  }
});

export default styles;