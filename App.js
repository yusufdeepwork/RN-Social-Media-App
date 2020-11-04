/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
}
  from '@react-navigation/native';
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
import {Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme} from 'react-native-paper';
import {AuthContext} from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // eslint-disable-next-line no-trailing-spaces
  
  // For Loading Progress
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
  };

  const theme = isDarkTheme ? CustomDefaultTheme : CustomDarkTheme;


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


  const {userToken} = loginState;
  if (loginState.isLoading) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <ActivityIndicator size="large" />
    </View>;
  }

  const authContext = React.useMemo(()=>({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {

      }
      dispatch({type: 'LOGOUT'});
      // setUserToken(null);
      // setIsLoading(false);
    },
    signUp: () => {
      setUserToken('dfhj');
      setIsLoading(false);
    },
  }), []);
  useEffect(()=> {
    let userToken;
    userToken = null;
    setTimeout(async ()=> {
      // setIsLoading(false);
      if ( userName == 'user' && password == 'pass') {
        userToken = 'dfdgdfgd';
        try {
          userToken = await AsyncStorage.getItem('userToken');
        } catch (error) {

        }
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);


  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
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
    </PaperProvider>
  );
};

export default App;
