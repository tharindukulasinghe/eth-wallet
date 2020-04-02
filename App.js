/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/home';
import AccountScreen from './screens/accounts';
import AddAccountScreen from './screens/addaccount';
import AccountInfoScreen from './screens/accountinfo';
import TopTokenScreen from './screens/toptokens';
import CoinFaucetScreen from './screens/coinfaucet';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My ETH Wallet',
            headerStyle: {
              backgroundColor: '#018786',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Accounts"
          component={AccountScreen}
          options={({navigation, route}) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('AddAccount')}
                title="New"
                color="#03DAC6"
                style={{marginRight: 20}}
              />
            ),
            headerStyle: {
              backgroundColor: '#018786',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name="AddAccount"
          component={AddAccountScreen}
          options={{
            headerStyle: {
              backgroundColor: '#018786',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AccountInfo"
          component={AccountInfoScreen}
          options={{
            headerStyle: {
              backgroundColor: '#018786',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="TopTokens"
          component={TopTokenScreen}
          options={{
            headerStyle: {
              backgroundColor: '#018786',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CoinFaucet"
          component={CoinFaucetScreen}
          options={{
            headerStyle: {
              backgroundColor: '#018786',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
