import { View, Text, StyleSheet } from 'react-native'


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Home Page</Text>

    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});