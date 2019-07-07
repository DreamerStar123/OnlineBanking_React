import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Sreens/Home';
import { colors } from '../utils';


class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Chat: SettingsScreen,
    Settings: SettingsScreen,
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;

                if (routeName === 'Home') {
                    iconName = `ios-home`
                    // IconComponent = HomeIconWithBa
                } else if (routeName === 'Chat') {
                    iconName = `ios-chatbubbles`;
                    return (<View style={{
                        position: 'absolute',
                        height: 80,
                        width: 80,
                        backgroundColor: focused ? colors.lightBlue : '#F0A417',
                        borderRadius: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}>
                        <IconComponent name={iconName} size={25} color={focused ? 'white' : 'white'} />
                    </View>)
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                }

                return <IconComponent name={iconName} size={25} color={focused ? colors.lightBlue : tintColor} />
            },
            tabBarLabel: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let label = focused ? <Text>{routeName}</Text> : null;
                switch (routeName) {
                    case 'Home':
                        return label =  null
                    case 'Chat':
                        return label = focused ? <Text style={{color: colors.white}}> Chats</Text> : null
                    default:
                      return label;
                }
            }
        }),
        tabBarOptions: {
            showLabel: false
        }
    });

export default createAppContainer(TabNavigator);