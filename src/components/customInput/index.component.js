import React from 'react';
import {
    TextInput,
    TouchableOpacity, 
    View
} from 'react-native';
import { COLORS } from '../../utilities/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './index.styles';

const CustomInput = (props) => {

    const {
        onChangeText,
        searchText,
        clearText,
    } = props;

    return (
        <View style={styles.mainView}>
            <View style={styles.textInputView}>
                {
                    searchText == '' &&
                    <View
                        style={styles.textSearchContainer}>
                        <AntDesign name={'search1'} size={20} color={COLORS.textGray}/>
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
                        <AntDesign name={'close'} size={20} color={COLORS.textGray}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default CustomInput;
