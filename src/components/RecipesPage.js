import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView
} from 'react-native';

import Search from './Search';
import RecipeCard from './RecipeCard';
import config from '../../config';

class RecipesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
    };
  }

  // TODO: Move this to async redux action via redux-thunk
  fetchData(searchQuery) {
    const ingredient = searchQuery;

    fetch(`https://api-v2.hellofresh.com/recipes/search?country=DE&ingredient=${ingredient}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.HELLOFRESH_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then( responseData => {
        const advertizement = {
          imageLink: 'http://bilder1.n-tv.de/img/ratgeber/origs13639436/9492732656-w1000-h960/TM5.jpg',
          name: 'THERMOMIX TM5 - the future of cooking. Discover now!',
          icon: 'adn'
        };

        responseData.items.push(advertizement);

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.items),
          loaded: true
        });
      })
      .catch( err => {
        if (err) {
          console.warn(err);
        }
      });
  }

  renderRecipe(recipeData, sectionID, rowID) {

    return (
      <RecipeCard
          key={recipeData.id}
          data={recipeData}
          rowid={rowID}
      />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Search fetchData={this.fetchData.bind(this)}/>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRecipe.bind(this)}
        />
      </View>
    );
  }
}

export default RecipesPage;
