import React,{useState} from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { StartGame, Game } from './screens/index';
import { useFonts } from 'expo-font'
import { colors } from './utils/colors'

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })
  const [userNumber, setUserNumber]=useState(null);

  const onStartGame=(selectedNumber)=>{
    setUserNumber(selectedNumber)

  }

  let content =  <StartGame onStartGame={onStartGame} />

  if (userNumber) {
    content = <Game selectedNumber={userNumber} />
  }

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color='#C6E2E9' />
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title='Welcome'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
