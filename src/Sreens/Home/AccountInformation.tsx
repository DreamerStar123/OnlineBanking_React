import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, fonts } from '../../utils';

const styles = StyleSheet.create({
    inforContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.white,
        padding: 20,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    column: {
        flexDirection: 'column'
    },
    title: {
        fontWeight: '500',
        color: colors.grey,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: fonts.numberFont,
        alignSelf: "flex-end"
    },
    currency: {
        fontSize: 9, 
        fontWeight: 'bold', 
        alignSelf: "flex-end", 
        fontFamily: fonts.numberFont,
    }
});

const DetailCard = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <View style={styles.column}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ ...styles.row, justifyContent: "flex-end" }}>
                <Text style={styles.subTitle}>{subTitle}</Text>
                <Text style={styles.currency}>KES</Text>
            </View>

        </View>
    )
}
export class AccountInformation extends Component {
    render() {
        return (
            <View style={styles.inforContainer}>
                <View style={styles.row}>
                    <DetailCard title="Balance" subTitle="250, 344 " />
                    <DetailCard title="Debt" subTitle="250 " />
                </View>
            </View>
        )
    }
}

export default AccountInformation
