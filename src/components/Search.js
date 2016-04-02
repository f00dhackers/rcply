import React, {
  Component,
  StyleSheet,
  View,
  TextInput,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleSubmit() {
    Alert.alert(
      'Alert!',
      this.state.text
    );
  }

  render() {
    return (
      <View style={styles.searchView}>
        {/* <Icon
        style={}
        name="search"
        size={30}
        color="#000"
        /> */}
        <TextInput
            syle={styles.searchInput}
            placeholder="Search by ingredients..."
            underlineColorAndroid="transparent"
            keyboardType="web-search"
            onChangeText={text => this.setState({text})}
            onSubmitEditing={this.handleSubmit.bind(this)}
            value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  searchIcon: {
    width: 30,
    marginLeft: 5,
    backgroundColor: 'red'
  },
  searchInput: {
    height: 36,
    width: 40,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    padding: 5
  }
});

export default Search;
