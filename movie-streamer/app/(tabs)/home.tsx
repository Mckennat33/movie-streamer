import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image';
import ImageViewer from '@/components/ImageViewer';


const PlaceholderImage = require('@/assets/images/android-icon-background.png');

const Home = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.text} >Home Page</Text>
            <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
      </View>
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
      imageContainer: {
    flex: 1,
  },
});