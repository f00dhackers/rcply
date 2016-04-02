import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

import Navigation from './Navigation';

class Rcply extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default Rcply;
