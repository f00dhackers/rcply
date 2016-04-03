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
import Dialog from 'react-native-dialogs';

class ShoppingListPage extends Component {
  _dialog() {
    var dialog = new Dialog();
    var options = {
      title: 'Order missing ingredients',
      content: 'Do you want to order the missing ingredients?',
      positiveText: 'Order',
      negativeText: 'Cancel'
    };
    dialog.set(options);
    dialog.show();
  }
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPress={this._dialog.bind(this)}>
            <View style={styles.shoppingListContainer}>
              <View style={styles.shoppingListHeader}>
                  <Image style={{resizeMode: 'cover', height: 75, width: 100}}
                         source={{uri: 'https://s3-eu-west-1.amazonaws.com/hf-recipes/image/5551f142f8b25e78738b4567.jpg'}} />
                  <Text style={styles.shoppingListHeaderText}>Green asparagus</Text>
             </View>
             <View style={styles.shoppingListView}>
               <View style={styles.shoppingListItem}>
                 <View style={styles.shoppingListItemIcon}>
                   <Icon name="check-circle-o"
                         size={30}
                         color="#91c11e" />
                 </View>
                 <Text style={styles.shoppingListItemText}>100g Tomatoes</Text>
               </View>
               <View style={styles.shoppingListItem}>
                 <View style={styles.shoppingListItemIcon}>
                   <Icon name="times-circle-o"
                         size={30}
                         color="#ff5922" />
                 </View>
                 <Text style={styles.shoppingListItemText}>250g Jasmin rice</Text>
               </View>
               <View style={styles.shoppingListItem}>
                 <View style={styles.shoppingListItemIcon}>
                   <Icon name="check-circle-o"
                         size={30}
                         color="#91c11e" />
                 </View>
                 <Text style={styles.shoppingListItemText}>1x Garlic clove</Text>
               </View>
              </View>
            </View>
            </TouchableOpacity>
            <View style={styles.shoppingListContainer}>
              <View style={styles.shoppingListHeader}>
                  <Image style={{resizeMode: 'cover', height: 75, width: 100}}
                         source={{uri: 'https://s3-eu-west-1.amazonaws.com/hf-recipes/image/5551f102fd2cb9a7168b456d.jpg'}} />
                  <Text style={styles.shoppingListHeaderText}>American Sandwich</Text>
             </View>
             <View style={styles.shoppingListView}>
               <View style={styles.shoppingListItem}>
                 <View style={styles.shoppingListItemIcon}>
                   <Icon name="check-circle-o"
                         size={30}
                         color="#91c11e" />
                 </View>
                 <Text style={styles.shoppingListItemText}>1x White bread</Text>
               </View>
               <View style={styles.shoppingListItem}>
                 <View style={styles.shoppingListItemIcon}>
                   <Icon name="check-circle-o"
                         size={30}
                         color="#91c11e" />
                 </View>
                 <Text style={styles.shoppingListItemText}>200g Cheddar cheese</Text>
               </View>
               <View style={styles.shoppingListItem}>
                 <View style={styles.shoppingListItemIcon}>
                   <Icon name="check-circle-o"
                         size={30}
                         color="#91c11e" />
                 </View>
                 <Text style={styles.shoppingListItemText}>1kt Mayonnaise</Text>
               </View>
              </View>
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
  shoppingListContainer: {
  flexDirection: 'column',
    margin: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  shoppingListHeader: {
    flexDirection: 'row', 
    width: 333,
    margin: 1,
    borderBottomColor: '#91c11e',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  shoppingListHeaderText: {
    marginLeft: 20,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  shoppingListView: {
    flex: 5,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  shoppingListItem: {
    margin: 5,
    flexDirection: 'row'
  },
  shoppingListItemIcon: {
    flex: 1,
    alignItems: 'center'
  },
  shoppingListItemText: {
    flex: 5,
    marginTop: 5,
    marginLeft: 10,
  },

});

export default ShoppingListPage;
