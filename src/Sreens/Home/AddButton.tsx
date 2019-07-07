import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../utils';

const styles = StyleSheet.create({
    inforContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.lightRed,
        padding: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export class AddButton extends Component {
    render() {
        return (
            <View style={styles.inforContainer}>
                <Ionicons name="ios-add-circle" size={30} color={colors.white} />
            </View>
        )
    }
}

export default AddButton
