import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ButtonProps = {
  onPrimaryBtnPress: () => void;
  primaryBtnText: string;
  showSecondaryBtn?: boolean;
  secondaryBtnText1?: string;
  secondaryBtnText2?: string;
  onSecondaryBtnPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  onPrimaryBtnPress,
  primaryBtnText,
  showSecondaryBtn = true,
  secondaryBtnText1,
  secondaryBtnText2,
  onSecondaryBtnPress,
}) => {
  return (
    <View style={styles.container}>
      {/** ====================== Main Button ============================= */}
      <Pressable onPress={onPrimaryBtnPress} style={styles.primaryButton}>
        <Text style={[styles.primaryButtonText, {fontFamily: 'Exo-SemiBold'}]}>
          {primaryBtnText}
        </Text>
      </Pressable>

      {/** ====================== Secondary pressable ============================= */}
      {showSecondaryBtn ? (
        <View style={styles.secondaryContainer}>
          <Text style={[styles.secondaryText, {fontFamily: 'Exo-Regular'}]}>
            {secondaryBtnText1}{' '}
          </Text>
          <Pressable onPress={onSecondaryBtnPress}>
            <Text
              style={[styles.secondaryButtonText, {fontFamily: 'Exo-Regular'}]}>
              {secondaryBtnText2}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  primaryButton: {
    paddingVertical: 12,
    backgroundColor: '#6A0DAD', // bgPurple
    paddingHorizontal: 28,
    borderRadius: 16,
    width: 267,
    maxHeight: 61,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 20,
    color: '#FFFFFF', // bgWhite
    textAlign: 'center',
  },
  secondaryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondaryText: {
    color: '#A9A9A9', // darkGrayText
    fontSize: 18,
  },
  secondaryButtonText: {
    color: '#6A0DAD', // bgPurple
    fontSize: 18,
  },
});

export default Button;
