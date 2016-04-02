import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class Rcply extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Rcply!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff'
  }
});

export default Rcply;
