import React from 'react';
import {
    Image,
    Text, 
    TextInput,
    TouchableOpacity, 
    View
} from 'react-native';
import { COLORS } from '../../utilities/colors';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './index.styles';

const CustomInput = (props) => {

    const {
        onChangeText,
        searchText,
        clearText,
    } = props;

    return (
        <LinearGradient colors={[COLORS.white,COLORS.textInputGray]} style={styles.mainView}>
            <View style={styles.textInputView}>
                {
                    searchText == '' &&
                    <View
                        style={styles.textClearContainer}>
                        <AntDesign name={'search1'} size={25} color={COLORS.textGray}/>
                    </View>
                }
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={onChangeText}>
                </TextInput>
                {
                    searchText !== '' &&
                    <TouchableOpacity
                        onPress={clearText}
                        style={styles.textClearContainer}>
                        <AntDesign name={'close'} size={25} color={COLORS.textGray}/>
                    </TouchableOpacity>
                }
            </View>
        </LinearGradient>
    );
};

export default CustomInput;
