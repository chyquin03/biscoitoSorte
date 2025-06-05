import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

function App() {
  const [fortune, setFortune] = useState('');
  const [isBroken, setIsBroken] = useState(false);

  const phrases = [
    'A sorte está ao seu lado!',
    'Você terá uma surpresa agradável em breve.',
    'Grandes oportunidades estão a caminho.',
    'Seu trabalho duro será recompensado.',
    'Prepare-se para algo incrível em sua vida!',
  ];

  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setFortune(phrases[randomIndex]);
    setIsBroken(true);
  };

  const resetCookie = () => {
    setFortune('');
    setIsBroken(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FortuneCookie</Text>

      {!isBroken ? (
        <TouchableOpacity onPress={breakCookie}>
          <Image
            source={require('./assets/biscoito-inteiro.png')}
            style={styles.cookieImage}
          />
        </TouchableOpacity>
      ) : (
        <>
          <Image
            source={require('./assets/biscoito-quebrado.jpg')}
            style={styles.cookieImage}
          />
          <Text style={styles.fortuneText}>{fortune}</Text>
          <TouchableOpacity onPress={resetCookie} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Quebrar outro biscoito</Text>
          </TouchableOpacity>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  resetButton: {
    backgroundColor: '#f8b400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;