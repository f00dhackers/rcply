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
    );
  }
}

export default Navigation;
