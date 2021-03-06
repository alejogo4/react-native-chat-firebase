import * as React from "react";
import {
  View,
  SafeAreaView,
  Image
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import NavigationService from "./src/services/NavigationService";

import Home from "./src/screens/Home";

import Create from "./src/screens/Create";

import Chat from "./src/screens/Chat";
import Login from "./src/screens/Login";
import Register from './src/screens/Register';


import { Provider } from 'react-redux';
import {store} from './src/redux/store';


const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 180,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
    
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const Drawer = createDrawerNavigator(
  {

    Home: Home,
    Create : Create,
    Login: Login,
    Register:Register,
    Home: Home,
    Chat:Chat
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const stackNavigation = createStackNavigator(
  {

    Home: Home,
    Create : Create,
    Login: Login,
    Register:Register,
    Home: Home,
    Chat:Chat
  },

  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(
  Drawer,
  stackNavigation,

);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}