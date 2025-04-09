import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets';
import Button from '../../Components/Button';
import Input from '../../Components/InputComponent';

const {signin} = images;

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 32}}>
      <View
        style={{flex: 1, justifyContent: 'space-around', marginVertical: 16}}>
        {/** ====================== Image ============================= */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: -40,
          }}>
          <Image source={signin} style={{width: 266, height: 266}} />
        </View>

        {/** ====================== Sign In inputs ============================= */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 12,
          }}>
          <Input label={'Email address'} placeholder={'name@example.com'} />
          <Input
            label={'Password'}
            placeholder={'********'}
            // Icon={EyeIcon}
            last
          />
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'Sign In'}
          // onPrimaryBtnPress={() => navigation.navigate('Home')}
          secondaryBtnText1={"Don't have an account?"}
          secondaryBtnText2={'Sign Up'}
          onPrimaryBtnPress={function (): void {
            throw new Error('Function not implemented.');
          }} // onSecondaryBtnPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
}
