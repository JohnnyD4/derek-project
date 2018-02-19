import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';

import stores from './src/storeIndex';
import Home from './src/components/menu/home';
import DetailPage from './src/components/feature/detailPage';

export default class App extends React.Component {
  render() {
    const RootStack = StackNavigator({
      Home: {
        screen: Home,
      },
      Detail: {
        screen: DetailPage,
      },
    },
    {
      initialRouteName: 'Home',
    });
    return (
      <Provider {...stores}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
