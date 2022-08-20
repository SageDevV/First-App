import { StatusBar, SafeAreaView, View } from 'react-native';
import IndexCesta from './src/telas/Index';
import MockCesta from './src/telas/Mocks/MockCesta'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
}
  from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <IndexCesta {...MockCesta} />
    </SafeAreaView>
  );
}

