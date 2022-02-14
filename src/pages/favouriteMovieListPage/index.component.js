import React, {useEffect, useState } from 'react';
import {
    SafeAreaView
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import styles from './index.styles';

const FavouriteMovieListPage = (props) => {

    const {

    } = props;


    return (
        <SafeAreaView style={styles.mainContainer}>
            
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
   
});

export default connect(mapStateToProps)(FavouriteMovieListPage);