import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

import CustomTextView from '../customTextView/index.component';
import styles from './index.styles';

const TabLabel = (props) => {
    const {
        route,
        focused
    } = props;

    return (
        <TouchableOpacity>
            <CustomTextView textValue={route.title} textStyle={focused ? styles.focusTitle : styles.inFocusTitle}/>
        </TouchableOpacity>
    );
};

export default TabLabel;
