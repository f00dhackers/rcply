import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Search from './Search';

class RecipesPage extends Component {
  render() {
    return (
      <View>
        <Search />
      </View>
    );
  }
}

export default RecipesPage;
