import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets';
import Button from '../../Components/Button';
import InputComponent from '../../Components/InputComponent';

const {signup} = images;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key: keyof typeof userData, value: string) => {
    setUserData({...userData, [key]: value});
  };

  const handleSubmit = () => {
    console.log('user data --> ', userData);
    // navigation.navigate('SelectGrade' as never, { userData } as never);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 32}}>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        {/** ====================== Image ============================= */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: -40,
            marginTop: -20,
          }}>
          <Image source={signup} style={{width: 353, height: 235}} />
        </View>
        {/** ====================== Sign Up inputs ============================= */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 12,
          }}>
          <InputComponent
            label={'Name'}
            placeholder={'Your name'}
            value={userData.name}
            onChange={text => handleInputChange('name', text)}
          />
          <InputComponent
            label={'Email address'}
            placeholder={'name@example.com'}
            value={userData.email}
            onChange={text => handleInputChange('email', text)}
          />
          <InputComponent
            label={'Password'}
            placeholder={'**********'}
            // Icon={EyeIcon}
            value={userData.password}
            onChange={text => handleInputChange('password', text)}
            last
          />
        </View>

        {/** ====== Action button -> Navigation to grade selection screen ======= */}
        <Button
          primaryBtnText={'Sign Up'}
          onPrimaryBtnPress={handleSubmit}
          secondaryBtnText1={'Already have an account?'}
          secondaryBtnText2={'Sign In'}
          onSecondaryBtnPress={() => navigation.navigate('SignIn' as never)}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
