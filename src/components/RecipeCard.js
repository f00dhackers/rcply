import React, {
  Component,
  PropTypes,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class RecipeCard extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    rowid: PropTypes.string.isRequired
  }
  render() {
    const { data } = this.props;

    return(
      <View style={styles.recipeCardContainer}>
        <TouchableOpacity>
          <View style={styles.recipeCardImage}>
            <Image
                style={{resizeMode: 'cover', height: 250, width: 333}}
                source={{uri: data.imageLink}}
            />
          </View>
          <View style={styles.recipeCardMetaImageContainer}>
              <Icon
                style={styles.recipeCardMetaImage}
                name="clock-o"
                size={30}
                color='#91c11e'
            />
            <Icon
                style={styles.recipeCardMetaImage}
                name="circle"
                size={30}
                color='#91c11e'
            />
            <Icon
                style={styles.recipeCardMetaImage}
                name="dot-circle-o"
                size={30}
                color='#91c11e'
            />
            { data.icon &&
              <View style={{flexDirection: 'row'}}>
              <Icon
                style={styles.recipeCardMetaImage}
                name={data.icon}
                size={30}
                color='#ff5922'
              />
              <Text style={{marginTop: 5, flex: 1}}>Sponsored</Text>
              </View>
            }
          </View>
          <View style={styles.recipeCardMetaTextContainer}>
            <Text style={styles.recipeCardMetaText}>{data.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /* container: {
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     backgroundColor: '#fff',
     borderStyle: 'solid',
     borderWidth: 1,
     borderColor: 'black',
     }, */
  recipeCardContainer: {
    flexDirection: 'column',
    margin: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#eaeaea'
  },
  recipeCardImage: {
    flexDirection: 'row'
  },
  recipeCardMetaImageContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10
  },
  recipeCardMetaImage: {
    marginRight: 20
  },
  recipeCardMetaTextContainer: {
    flexDirection: 'column',
    width: 333,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  recipeCardMetaText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  recipeCardMetaTextAd: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});

export default RecipeCard;
