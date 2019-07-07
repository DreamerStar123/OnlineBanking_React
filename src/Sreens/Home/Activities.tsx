import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { colors } from '../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0,
        marginTop: 23
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: 'column'
    },
    spaceBetween: {
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "500",
    },
    activityCard: {
        padding: 10,
        backgroundColor: colors.white,
        marginTop: 12,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: "center"
    }
});

const ActivityCard = ({ image, name, amount }: { image: any, name: string, amount: number }) => {
    const color = amount < 1 ? colors.lightRed : colors.lightGreen;
    return (
        <View style={{ ...styles.row, ...styles.activityCard }}>
            <View style={{ flex: 1 }}>
                <Image source={image} style={{ width: 30, height: 40 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ ...styles.title }}>{name}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ ...styles.title, color, alignSelf: 'flex-end' }}>{amount} KES</Text>
            </View>
        </View>
    );
}
export class Activities extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...styles.row, ...styles.spaceBetween, marginRight: 12 }}>
                    <Text style={{ ...styles.title }}> Recent Activities</Text>
                    <Text style={{ ...styles.title, color: colors.blue }}>Edit</Text>
                </View>

                <ActivityCard image={require('../../../assets/userme.png')} name="Paul King" amount={970} />
                <ActivityCard image={require('../../../assets/user2.png')} name="Max Ward" amount={-900} />
                <ActivityCard image={require('../../../assets/userme.png')} name="Paul King" amount={-50} />
                <ActivityCard image={require('../../../assets/user2.png')} name="Max Ward" amount={500} />

            </View>
        )
    }
}

export default Activities
