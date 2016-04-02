import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

import TabBar from './TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import RecipesPage from './RecipesPage';
import IngredientsPage from './IngredientsPage';
import ShoppingListPage from './ShoppingListPage';
import MorePage from './MorePage';

class Rcply extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <TabBar />}
        >
          <ScrollView tabLabel="list-alt">
            <RecipesPage />
          </ScrollView>
          <ScrollView tabLabel="home" >
            <IngredientsPage />
          </ScrollView>
          <ScrollView tabLabel="shopping-basket">
            <ShoppingListPage />
          </ScrollView>
          <ScrollView tabLabel="bars">
            <MorePage />
          </ScrollView>
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
