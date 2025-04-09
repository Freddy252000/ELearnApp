import {Text, TextInput, View} from 'react-native';
import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  last?: boolean;
  Icon?: React.ComponentType<{size: number; color?: string}>;
  value?: string;
  onChange?: (text: string) => void;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  placeholder,
  last = false,
  Icon,
  value,
  onChange,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 8,
        position: 'relative',
        width: '100%',
        marginBottom: last ? 0 : 20,
      }}>
      <Text
        style={{
          fontFamily: 'Exo',
          fontWeight: '600',
          color: '#4A4A4A',
          fontSize: 16,
        }}>
        {label}
      </Text>
      {/** ====================== Text Input ============================= */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          backgroundColor: 'white',
          height: 48,
          borderRadius: 8,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 2},
        }}>
        <TextInput
          style={{
            fontFamily: 'Exo',
            flex: 1,
            color: '#4A4A4A',
            fontSize: 14,
            height: '100%',
            backgroundColor: 'white',
            borderRadius: 8,
          }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={label === 'Password'}
        />
        {/** ====================== Optional Icon ============================= */}
        {Icon ? <Icon size={20} color={'#A0A0A0'} /> : null}
      </View>
    </View>
  );
};

export default InputComponent;
