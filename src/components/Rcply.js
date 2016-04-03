// don't know if package.json will load everything you need
// check out: https://github.com/lwansbrough/react-native-camera

'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Camera from 'react-native-camera';


class Cameraw extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}  
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
        <View style={styles.capture}>
          <Text style={styles.text} onPress={this.takePicture.bind(this)}>Take Picture</Text>
        </View>
      </View>
    );  
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  preview: {
    marginTop: 50,
    alignItems: 'center',
    height: Dimensions.get('window').height-150,
    width: Dimensions.get('window').width
  },  
  capture: {
    paddingTop: 25,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000'
  }
});

AppRegistry.registerComponent('Cameraw', () => Cam);

export default Cameraw;
