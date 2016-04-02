import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import RecipesPage from './RecipesPage';
import IngredientsPage from './IngredientsPage';
import ShoppingListPage from './ShoppingListPage';
import MorePage from './MorePage';

class Rcply extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView>
          <RecipesPage tabLabel="Recipes" />
          <IngredientsPage tabLabel="Ingredients" />
          <ShoppingListPage tabLabel="Shopping List" />
          <MorePage tabLabel="More" />
        </ScrollableTabView>
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
