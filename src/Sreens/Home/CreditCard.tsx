import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { colors, fonts } from '../../utils';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    flex: {
        flex: 1
    },
    cardContainer: {
        flex: 1,
        height: deviceHeight / 5,
        backgroundColor: colors.white
    },
    container: {
        backgroundColor: colors.lightOrange
    },
    creditCard: {
        flex: 1,
        position: "absolute",
        height: deviceHeight / 5,
        width: deviceWidth - 40,
        backgroundColor: colors.blue,
        right: 0,
        top: 50,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    creditCardContent: {
        flexDirection: "column",
        flex: 1,
        padding: 23,
        marginLeft: 20
    },
    creditCardHeading: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.white
    },
    marginSpacing: {
        marginTop: 5,
        marginBottom: 5
    },
    creditCardNumber: {
        fontWeight: 'normal',
        fontSize: 20,
        color: '#AFD7F5',
        fontFamily: fonts.numberFont
    },
    creditCardFooter: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})
const CardNumber = ({ number }) => {
    return (
        <Text style={styles.creditCardNumber}>
            {number}
        </Text>
    )
}
export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.creditCard}>
                    <View style={styles.creditCardContent}>

                        <View style={styles.marginSpacing}>
                            <Text style={styles.creditCardHeading}>Card Number</Text>
                        </View>
                        <View style={styles.creditCardFooter}>
                            <CardNumber number='****' />
                            <CardNumber number='****' />
                            <CardNumber number='****' />
                            <CardNumber number='1234' />
                        </View>
                        <View style={styles.marginSpacing}>
                            <Text style={styles.creditCardHeading}>Expiration Date</Text>
                        </View>

                        <View style={styles.creditCardFooter}>
                            <Text style={styles.creditCardNumber}>12/20</Text>
                            <FontAwesome name="cc-visa" size={24} color={colors.white} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}