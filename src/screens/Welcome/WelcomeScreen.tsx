// import {View, Text, Image} from 'react-native';
// import React from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';
// import {welcomeScreenData} from '../../assets/data/data';
// import {images} from '../../assets';
// import Button from '../../Components/Button';

// const {Welcome02} = images;

// export default function WelcomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
//       <View
//         style={{flex: 1, justifyContent: 'space-around', marginVertical: 16}}>
//         {/** ====================== Image =================================== */}
//         <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//           <Image source={Welcome02} style={{width: 324, height: 324}} />
//         </View>

//         {/** ====================== Welcome Text ============================= */}
//         <View style={{alignItems: 'center', marginTop: -100}}>
//           <Text
//             style={{
//               color: '#4A4A4A',
//               fontSize: 20,
//               textAlign: 'center',
//               // fontFamily: 'Exo-SemiBold',
//             }}>
//             {welcomeScreenData.title}
//           </Text>
//           <Text
//             style={{
//               color: '#4A4A4A',
//               fontSize: 18,
//               textAlign: 'center',
//               // fontFamily: 'Exo-Regular',
//               marginTop: 8,
//             }}>
//             {welcomeScreenData.subtitle}
//           </Text>
//         </View>

//         {/** ====================== Action button ============================= */}
//         <Button
//           primaryBtnText="Sign Up"
//           //@ts-ignore
//           onPrimaryBtnPress={() => navigation.navigate('SignUp')}
//           secondaryBtnText2="Skip"
//           //@ts-ignore
//           onSecondaryBtnPress={() => navigation.navigate('SignIn')}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets';
import {welcomeScreenData} from '../../assets/data/data';
import Button from '../../Components/Button';

const {width} = Dimensions.get('window');
const {OnlineLearningImage, VirtualClassroomImage, ProgressTrackingImage} =
  images;
const slides = [
  {
    id: '1',
    image: OnlineLearningImage,
    title: 'Learn Anytime, Anywhere',
    subtitle: 'Access a wide range of courses at your convenience.',
  },
  {
    id: '2',
    image: VirtualClassroomImage,
    title: 'Live Interactive Classes',
    subtitle: 'Join expert-led sessions and clear your doubts in real-time.',
  },
  {
    id: '3',
    image: ProgressTrackingImage,
    title: 'Track Your Progress',
    subtitle:
      'Stay on top of your learning with detailed insights and milestones.',
  },
];

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < slides.length - 1) {
      const interval = setInterval(() => {
        //@ts-ignore
        flatListRef.current.scrollToIndex({index: currentIndex + 1});
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      //@ts-ignore
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      //@ts-ignore
      flatListRef.current.scrollToIndex({index: currentIndex - 1});
    }
  };

  const handleSkip = () => {
    //@ts-ignore
    flatListRef.current.scrollToIndex({index: slides.length - 1});
  };

  const handleFinish = () => {
    //@ts-ignore
    navigation.navigate('SignUp');
  };

  //@ts-ignore
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewConfig.current}
        renderItem={({item}) => (
          <View style={{width, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={item.image} style={{width: 300, height: 300}} />
            <View
              style={{
                alignItems: 'center',
                marginTop: 50,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#4A4A4A',
                  fontSize: 22,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#4A4A4A',
                  fontSize: 18,
                  textAlign: 'center',
                  fontFamily: 'Exo-Regular',
                  marginTop: 8,
                }}>
                {item.subtitle}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              height: 8,
              width: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === index ? '#000' : '#ccc',
              margin: 5,
            }}
          />
        ))}
      </View>

      {/*Button */}

      <View
        style={{
          gap: 8,
          marginTop: 30,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {currentIndex === 0 ? (
          <>
            <Pressable onPress={handleSkip}>
              <Text
                style={{
                  fontFamily: 'Exo-Regular',
                  color: '#007bff',
                  fontSize: 16,
                  textDecorationLine: 'underline',
                }}>
                Skip
              </Text>
            </Pressable>
            <TouchableOpacity
              onPress={handleNext}
              style={{
                backgroundColor: '#0A5EB0',
                width: 250,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 18}}>Next</Text>
            </TouchableOpacity>
          </>
        ) : currentIndex === 1 ? (
          <>
            <TouchableOpacity
              onPress={handlePrev}
              style={{
                backgroundColor: '#007bff',
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 18}}>{'<<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNext}
              style={{
                backgroundColor: '#0A5EB0',
                width: 250,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 18}}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={handlePrev}
              style={{
                backgroundColor: '#007bff',
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 18}}>{'<<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleFinish}
              style={{
                backgroundColor: '#0A5EB0',
                width: 250,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontSize: 18}}>Finish</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
