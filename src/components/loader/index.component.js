import React from 'react';
import {
    ActivityIndicator, View
} from 'react-native';
import { COLORS } from '../../utilities/colors';
import { LOADER_TEXT } from '../../utilities/strings';
import CustomTextView from '../customTextView/index.component';
import styles from './index.styles';


const Loader = ({ }) => {

    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={COLORS.primary} />
            <CustomTextView  
                textValue={LOADER_TEXT}
                numberOfLines={3}
                textStyle={styles.title}/>
        </View>
    );
};

export default Loader;
