import React, {
  Component,
  StyleSheet,
  View,
  Icon,
  Text,
  DrawerLayoutAndroid
} from 'react-native';


// +++ FILTER TOGGLE BUTTON +++

const { SwitchAndroid } = React;
const Switch = React.createClass({
  getInitialState() {
    return {value: false};
  },

  _onValueChange(value) {
    this.setState({value: value});
    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  },

  render() {
    return (
      <SwitchAndroid
        onValueChange={this._onValueChange}
        value={this.state.value}/>
      );
  }
});


class Rcply extends Component {
  render() {

    // +++ FILTER DRAWER +++

    const filterDrawer = (
      <View style={styles.filterDrawer}>

        <Text style={styles.drawerHead}> Meal Type </Text>
        <View style={styles.hr} />       

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Appetizer </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Main Course </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Dessert </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Snack </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <Text style={styles.drawerHead}> Category </Text>
        <View style={styles.hr} />       

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Gluten Free </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Under 30 minutes </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Eat First </Text>
           <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Spicy </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Extra Spicy </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> One Pot Wonder </Text>
          <Switch style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

      </View>
    );

    // +++ RECIPE SEARCH +++
  
    return (

      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={() => filterDrawer}
      >
  
        <View style={styles.recipeSearch}>
          <Text style={styles.recipeSearchText}>Here goes the recipe search</Text>
        </View>

      </DrawerLayoutAndroid>
    ); 
  }
}


// +++ STYLES +++

const styles = StyleSheet.create({

  filterDrawer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#e6e6e6'
  },

  drawerHead: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'left',
    borderBottomWidth: 2
  },

  hr: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 15
  },

  drawerSub: {
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'left'
  },

  toggleBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  recipeSearch: {
    flex: 1,
    backgroundColor: '#e6e6e6'
  },

  recipeSearchText: {
    margin: 10,
    textAlign: 'center',
    fontSize: 16
  }

});

export default Rcply;
