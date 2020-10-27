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

const Drawer = createDrawerNavigator();

export default function App() {
  // eslint-disable-next-line no-trailing-spaces
  
  // For Loading Progress
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
