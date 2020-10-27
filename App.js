/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import RootStackScreen from './screens/RootStackScreen';
import {useEffect} from 'react';
import {View} from 'react-native-animatable';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext} from './components/context';

const Drawer = createDrawerNavigator();

const App = () => {
  // eslint-disable-next-line no-trailing-spaces
  
  // For Loading Progress
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    const {id, token} = action;
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: id,
          userToken: token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: id,
          userToken: token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <ActivityIndicator size="large" />
    </View>;
  }

  const authContext = React.useMemo(()=>({
    signIn: () => {
      setUserToken('fffgj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('dfhj');
      setIsLoading(false);
    },
  }), []);


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken != null ? (
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Support" component={SupportScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) :
        <RootStackScreen />

        }

      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
