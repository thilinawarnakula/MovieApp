import React from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {
    COLORS,
} from '../../utilities/colors';

import styles from './index.styles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import CustomTextView from '../customTextView/index.component';

const PageHeader = (props) => {
    const {
        isFavouriteVideo,
        showFavIcon,
        showBackIcon,
        title,
        onPress = {},
        onPressFavIcon = {},
        style = {}
    } = props;

    const handleFavouriteClick = () => {
        onPressFavIcon(!isFavouriteVideo);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar backgroundColor={COLORS.primary} />
            {
                <View style={[style, styles.header]}>
                    {
                        showBackIcon &&
                        <TouchableOpacity style={styles.backIconContainer} activeOpacity={0.6} onPress={onPress}>
                            <Feather name={'arrow-left'} size={30} color={COLORS.white} />
                        </TouchableOpacity>
                    }
                    <CustomTextView
                        textValue={title}
                        numberOfLines={1}
                        textStyle={styles.title}>
                    </CustomTextView>
                    {
                        showFavIcon &&
                        <TouchableOpacity style={styles.favIconContainer} activeOpacity={0.6} onPress={handleFavouriteClick}>
                            {isFavouriteVideo ? <Entypo name={'heart'} size={30} color={COLORS.white} /> : <Entypo name={'heart-outlined'} size={30} color={COLORS.white} />}
                        </TouchableOpacity>
                    }
                </View>
            }
        </SafeAreaView>

    );
};


export default PageHeader;