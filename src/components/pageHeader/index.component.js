import React from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
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
        isFavIcon,
        title,
        onPress,
        onPressFavIcon,
        style = {}
    } = props;
    return (
        <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary}/>
        {
            <View style={[style, styles.header]}>
                <TouchableOpacity style={styles.backIconContainer} activeOpacity={0.6} onPress={onPress}>
                    <Feather name={'arrow-left'} size={30} color={COLORS.white} />
                </TouchableOpacity>
                <CustomTextView
                    textValue={title}
                    numberOfLines={1}
                    textStyle={styles.title}>
                </CustomTextView>
                {
                    isFavIcon &&
                    <TouchableOpacity style={styles.favIconContainer} activeOpacity={0.6} onPress={onPressFavIcon}>
                       {true ? <Entypo name={'heart'} size={30} color={COLORS.white} /> : <Entypo name={'heart-outlined'} size={30} color={COLORS.white} />} 
                    </TouchableOpacity>
                }
            </View>
        }
    </SafeAreaView>

    );
};


export default PageHeader;