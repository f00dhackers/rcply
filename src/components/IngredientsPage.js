import React, {
  Alert,
  Component,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dialog from 'react-native-dialogs';

class IngredientsPage extends Component {
  _dialog() {
{
  var dialog = new Dialog();
  var options = {
      items: [
        "Type an item",
        "Scan a receipt",
        "Take a picture",
     ],
     title: "Add ingredients",
     itemsCallbackSingleChoice: (id, text) => ToastAndroid.show(id + ": " + text, ToastAndroid.SHORT)
 };
  dialog.set(options);
  dialog.show();
}
  }
  render() {
    return (
        <View style={styles.container}>
          <Text style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  paddingBottom: 20 }}>
            Your ingredients list is empty. Please add an item you already have at home by clicking on the PLUS icon.
          </Text>
          <TouchableOpacity onPress={this._dialog.bind(this)}>
            <Icon name='plus-circle'
                  size={80}
                  color='#91c11e' />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
});

export default IngredientsPage;
