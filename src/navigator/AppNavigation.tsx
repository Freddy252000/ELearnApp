import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/Loginscreen';
import SignUpScreen from '../screens/Signup/SignUpScreen';
// import SelectGradeScreen from '../screens/SelectGradeScreen';
// import SelectProvinceScreen from '../screens/SelectProvinceScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import StreamScreen from '../screens/StreamScreen';
// import ClassWorkScreen from '../screens/ClassWorkScreen';
import {themeColors} from '../theme';
import {images} from '../assets';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/** ============== App Navigator =================== */
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        /> */}
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="SignIn"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUpScreen}
        />
        {/* <Stack.Screen
          name="SelectGrade"
          options={{ headerShown: false }}
          component={SelectGradeScreen}
        />
        <Stack.Screen
          name="SelectProvince"
          options={{ headerShown: false }}
          component={SelectProvinceScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/** ============== Bottom Tab Navigator =================== */

const {streamIcon, classWorkIcon, exploreIcon} = images;
const extraTabOptions = {
  tabBarLabelStyle: {fontFamily: 'Exo'}, // Make sure Exo is linked manually
  tabBarStyle: {borderTopRightRadius: 12, borderTopLeftRadius: 12},
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};

// function BottomTabNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="Explore">
//       <Tab.Screen
//         name="Explore"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//           tabBarIcon: (props) => (
//             <Image
//               source={exploreIcon}
//               style={{
//                 tintColor: props.color,
//                 width: props.size,
//                 height: props.size,
//               }}
//               {...props}
//             />
//           ),
//           ...extraTabOptions,
//         }}
//       />
//       <Tab.Screen
//         name="Stream"
//         component={StreamScreen}
//         options={{
//           headerShown: false,
//           tabBarIcon: (props) => (
//             <Image
//               source={streamIcon}
//               style={{
//                 tintColor: props.color,
//                 width: props.size,
//                 height: props.size,
//               }}
//               {...props}
//             />
//           ),
//           ...extraTabOptions,
//         }}
//       />
//       <Tab.Screen
//         name="Classwork"
//         component={ClassWorkScreen}
//         options={{
//           headerShown: false,
//           tabBarIcon: (props) => (
//             <Image
//               source={classWorkIcon}
//               style={{
//                 tintColor: props.color,
//                 width: props.size,
//                 height: props.size,
//               }}
//               {...props}
//             />
//           ),
//           ...extraTabOptions,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
