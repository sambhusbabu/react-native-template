import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Text, TextInput } from 'react-native-paper';

const Home = () => {
    const [message, setMessage] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge" style={styles.text}>Hai </Text>
      <TextInput
      mode="outlined"
      label="Outlined input"
      value={message}
      onChangeText={setMessage}
      placeholder="Type something"
      right={<TextInput.Affix text={`${message.length}/100`} />}
    />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      padding: 12,
    },
    text: {
        textAlign: 'center',
    },
});
