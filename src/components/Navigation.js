import React, {
  Component,
  ScrollView
} from 'react-native';

import TabBar from './TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import RecipesPage from './RecipesPage';
import IngredientsPage from './IngredientsPage';
import ShoppingListPage from './ShoppingListPage';
import MorePage from './MorePage';

class Navigation extends Component {
  render() {
    return (
      <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <TabBar />}
      >
        <ScrollView tabLabel="list-alt" contentContainerStyle={{flex:1}}>
          <RecipesPage />
        </ScrollView>
        <ScrollView tabLabel="home" contentContainerStyle={{flex:1}}>
          <IngredientsPage />
        </ScrollView>
        <ScrollView tabLabel="shopping-basket" contentContainerStyle={{flex:1}}>
          <ShoppingListPage />
        </ScrollView>
        <ScrollView tabLabel="bars" contentContainerStyle={{flex:1}}>
          <MorePage />
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

export default Navigation;
