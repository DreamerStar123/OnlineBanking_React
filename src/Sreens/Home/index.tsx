import React from 'react';
import { Container, Header, Right, Left } from 'native-base';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Dimensions,
    ScrollView,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../utils';
import CreditCard from './CreditCard';
import AccountInformation from './AccountInformation';
import AddButton from './AddButton';
import Activities from './Activities';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerText: {
        color: colors.lightBlue,
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center"
    },
    headerCenter: {
        marginTop: 10
    },
    header: {
        backgroundColor: colors.white,
        borderBottomWidth: 0,
        borderBottomColor: colors.white,
        marginTop: Platform.OS === 'android' ? 30 : 0
    },
    flex: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        height: deviceHeight / 5,
        backgroundColor: colors.white
    },
    container: {
        backgroundColor: colors.lightOrange
    },
    marginSpacing: {
        marginTop: 5,
        marginBottom: 5
    },
})

export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.flex} >
                <Container style={styles.container}>
                    <Header style={styles.header}>
                        <Left>
                            <Ionicons name="ios-notifications-outline" size={26} />
                            <View style={{
                                // If you're using react-native < 0.57 overflow outside of the parent
                                // will not work on Android, see https://git.io/fhLJ8
                                position: 'absolute',
                                left: -2,
                                top: 2,
                                backgroundColor: 'red',
                                borderRadius: 6,
                                width: 12,
                                height: 12,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{8}</Text>
                            </View>
                        </Left>
                        <View style={styles.headerCenter}>
                            <Text style={styles.headerText}> Online Banking </Text>
                        </View>
                        <Right>
                            <Ionicons name="md-settings" size={26} />
                        </Right>
                    </Header>
                    <ScrollView style={styles.flex}>
                        <View>
                            <CreditCard />
                        </View>

                        <View style={{ marginTop: 70, flexDirection: 'row' }}>
                            <View style={{ flex: 3 }}>
                                <AccountInformation />
                            </View>
                            <View style={{ flex: 1, marginLeft: 12, marginRight: 12 }}>
                                <AddButton />
                            </View>
                        </View>
                        <View style={styles.flex}>
                            <Activities />
                        </View>
                    </ScrollView>
                </Container>
            </SafeAreaView>
        )
    }
}