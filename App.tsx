// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import AppNavigation from './src/navigator/AppNavigation';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const safePadding = '5%';

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <AppNavigation />
//     </>
//     // <View style={backgroundStyle}>
//     //   <StatusBar
//     //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//     //     backgroundColor={backgroundStyle.backgroundColor}
//     //   />
//     //   <ScrollView style={backgroundStyle}>
//     //     <View style={{paddingRight: safePadding}}>
//     //       <Header />
//     //     </View>
//     //     <View
//     //       style={{
//     //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
//     //         paddingHorizontal: safePadding,
//     //         paddingBottom: safePadding,
//     //       }}>
//     //       <Section title="Step One">
//     //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//     //         screen and then come back to see your edits.
//     //       </Section>
//     //       <Section title="See Your Changes">
//     //         <ReloadInstructions />
//     //       </Section>
//     //       <Section title="Debug">
//     //         <DebugInstructions />
//     //       </Section>
//     //       <Section title="Learn More">
//     //         Read the docs to discover what to do next:
//     //       </Section>
//     //       <LearnMoreLinks />
//     //     </View>
//     //   </ScrollView>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import AppNavigation from './src/navigator/AppNavigation';
import {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Text, View} from 'react-native';
import React from 'react';

const App = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     SplashScreen.show();
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
      {/* <WelcomeScreen /> */}
    </>
  );
};
export default App;
