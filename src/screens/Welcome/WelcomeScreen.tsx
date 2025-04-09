import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {welcomeScreenData} from '../../assets/data/data';
import {images} from '../../assets';
import Button from '../../Components/Button';

const {welcome} = images;

export default function WelcomeScreen() {
  const navigation = useNavigation();
  try {
    return (
      <View>
        <Text>Welcome!</Text>
      </View>
    );
  } catch (error) {
    console.error('WelcomeScreen crashed', error);
    return <Text>Error loading screen</Text>;
  }

  // return (
  //   <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
  //     <View
  //       style={{flex: 1, justifyContent: 'space-around', marginVertical: 16}}>
  //       {/** ====================== Image =================================== */}
  //       <View style={{flexDirection: 'row', justifyContent: 'center'}}>
  //         <Image source={welcome} style={{width: 324, height: 324}} />
  //       </View>

  //       {/** ====================== Welcome Text ============================= */}
  //       <View style={{alignItems: 'center', marginTop: -100}}>
  //         <Text
  //           style={{
  //             color: '#4A4A4A',
  //             fontSize: 20,
  //             textAlign: 'center',
  //             // fontFamily: 'Exo-SemiBold',
  //           }}>
  //           {welcomeScreenData.title}
  //         </Text>
  //         <Text
  //           style={{
  //             color: '#4A4A4A',
  //             fontSize: 18,
  //             textAlign: 'center',
  //             // fontFamily: 'Exo-Regular',
  //             marginTop: 8,
  //           }}>
  //           {welcomeScreenData.subtitle}
  //         </Text>
  //       </View>

  //       {/** ====================== Action button ============================= */}
  //       <Button
  //         primaryBtnText="Sign Up"
  //         //@ts-ignore
  //         onPrimaryBtnPress={() => navigation.navigate('SignUp')}
  //         secondaryBtnText2="Skip"
  //         //@ts-ignore
  //         onSecondaryBtnPress={() => navigation.navigate('SignIn')}
  //       />
  //     </View>
  //   </SafeAreaView>
  // );
}
