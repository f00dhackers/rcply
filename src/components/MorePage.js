import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class MorePage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.listview}>
            <View style={styles.listitem}>
              <View style={styles.itemicon}>
                <Icon style={styles.itemicon}
                      name="user"
                      size={30}
                      color="#91c11e" />
              </View>
              <Text style={styles.itemtext}>My Account</Text>
            </View>
            <View style={styles.listitem}>
              <View style={styles.itemicon}>
                <Icon name="newspaper-o"
                      size={30}
                      color="#91c11e" />
              </View>
              <Text style={styles.itemtext}>News</Text>
            </View>
            <View style={styles.listitem}>
              <View style={styles.itemicon}>
                <Icon name="envelope"
                      size={30}
                      color="#91c11e" />
              </View>
              <Text style={styles.itemtext}>Support</Text>
            </View>
            <View style={styles.listitem}>
              <View style={styles.itemicon}>
                <Icon name="question-circle"
                      size={30}
                      color="#91c11e" />
              </View>
              <Text style={styles.itemtext}>FAQ</Text>
            </View>
            <View style={styles.listitem}>
              <View style={styles.itemicon}>
                <Icon name="info-circle"
                      size={30}
                      color="#91c11e" />
              </View>
              <Text style={styles.itemtext}>About</Text>
            </View>
            <View style={styles.listitem}>
              <View style={styles.itemicon}>
                <Icon name="star"
                      size={30}
                      color="#91c11e" />
              </View>
              <Text style={styles.itemtext}>Rate App</Text>
            </View>
          </View>
          <View style={styles.footer}>
          <View style={styles.footeritems}>
            <Text>Hacked with </Text>
            <Icon name="heart"
                  size={10}
                  color="#ff5922" />
            <Text> in the Rainmaking Loft.</Text>
          </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 19
  },
  listview: {
    flex: 5,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10
  },
  listitem: {
    margin: 5,
    flexDirection: 'row'
  },
  itemicon: {
    flex: 1,
    alignItems: 'center'
  },
  itemtext: {
    flex: 5,
    marginTop: 5
  },
  footer: {
    flex: 1,
    alignItems: 'center'
  },
  footeritems: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default MorePage;
