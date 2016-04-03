import React, {
  Component,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class RecipesPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.recipeCardContainer}>
            <TouchableOpacity>
            <View style={styles.recipeCardImage}>
              <Image style={{resizeMode: 'cover', height: 250, width: 333}}
                     source={{uri: 'https://s3-eu-west-1.amazonaws.com/hf-recipes/image/5551f142f8b25e78738b4567.jpg'}} />
            </View>
            <View style={styles.recipeCardMetaImageContainer}>
              <Icon style={styles.recipeCardMetaImage}
                    name="clock-o"
                    size={30}
                    color='#91c11e' />
              <Icon style={styles.recipeCardMetaImage}
                    name="circle"
                    size={30}
                    color='#91c11e' />
              <Icon style={styles.recipeCardMetaImage}
                    name="dot-circle-o"
                    size={30}
                    color='#91c11e' />
            </View>
            <View style={styles.recipeCardMetaTextContainer}>
              <Text style={styles.recipeCardMetaText}>Green asparagus with tomatoes and jasmine rice</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.recipeCardContainer}>
            <TouchableOpacity>
            <View style={styles.recipeCardImage}>
              <Image style={{resizeMode: 'cover', height: 250, width: 333}}
                     source={{uri: 'http://bilder1.n-tv.de/img/ratgeber/origs13639436/9492732656-w1000-h960/TM5.jpg'}} />
            </View>
            <View style={styles.recipeCardMetaImageContainer}>
              <Icon style={styles.recipeCardMetaImage}
                    name="adn"
                    size={30}
                    color='#ff5922' />
              <Text style={{marginTop:5}}>Sponsored</Text>
            </View>
            <View style={styles.recipeCardMetaTextContainer}>
              <Text style={styles.recipeCardMetaTextAd}> THERMOMIX TM5 - the future of cooking. Discover now!</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.recipeCardContainer}>
            <TouchableOpacity>
            <View style={styles.recipeCardImage}>
              <Image style={{resizeMode: 'cover', height: 250, width: 333}}
                     source={{uri: 'https://s3-eu-west-1.amazonaws.com/hf-recipes/image/5551f102fd2cb9a7168b456d.jpg'}} />
            </View>
            <View style={styles.recipeCardMetaImageContainer}>
              <Icon style={styles.recipeCardMetaImage}
                    name="clock-o"
                    size={30}
                    color='#91c11e' />
              <Icon style={styles.recipeCardMetaImage}
                    name="circle"
                    size={30}
                    color='#91c11e' />
              <Icon style={styles.recipeCardMetaImage}
                    name="dot-circle-o"
                    size={30}
                    color='#91c11e' />
              <Icon style={styles.recipeCardMetaImage}
                    name="pause-circle"
                    size={30}
                    color='#91c11e' />
            </View>
            <View style={styles.recipeCardMetaTextContainer}>
              <Text style={styles.recipeCardMetaText}>Sandwich "American Style" with potato wedges</Text>
            </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  recipeCardContainer: {
    flexDirection: 'column',
    margin: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  recipeCardImage: {
    flexDirection: 'row', 
  },
  recipeCardMetaImageContainer: {
    flexDirection: 'row', 
    paddingTop: 10,
    paddingLeft: 10,
  },
  recipeCardMetaImage: {
    marginRight: 20,
  },
  recipeCardMetaTextContainer: {
    flexDirection: 'column', 
    width: 333,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  recipeCardMetaText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  recipeCardMetaTextAd: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default RecipesPage;
