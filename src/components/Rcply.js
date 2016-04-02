import React, {
  Component,
  StyleSheet,
  View,
  Text,
  DrawerLayoutAndroid
} from 'react-native';


// +++ FILTER TOGGLE BUTTON +++

const { SwitchAndroid } = React;
const Switch = React.createClass({
  getInitialState() {
    return {
      value: false,
    };
  },

  _onValueChange(value) {
    this.setState({value: value});
    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  },

  render() {
    return (
      <SwitchAndroid onValueChange={this._onValueChange} value={this.state.value}/>
    );
  }
});


class Filter extends Component {
  render() {

    // +++ FILTER DRAWER +++

    const filterDrawer = (
      <View style={styles.filterDrawer}>

        <Text style={styles.drawerHead}> Meal Type </Text>
        <View style={styles.hr} />       

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Appetizer </Text>
          <Switch ref={'Appetizer'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }} value={true} />
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Main Course </Text>
          <Switch ref={'MainCourse'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Dessert </Text>
          <Switch ref={'Dessert'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Snack </Text>
          <Switch ref={'Snack'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <Text style={styles.drawerHead}> Category </Text>
        <View style={styles.hr} />       

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Gluten Free </Text>
          <Switch ref={'GlutenFree'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Under 30 minutes </Text>
          <Switch ref={'Under30min'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Eat First </Text>
           <Switch ref={'EatFirst'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Spicy </Text>
          <Switch ref={'Spicy'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> Extra Spicy </Text>
          <Switch ref={'ExtraSpicy'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.toggleBtn}> 
          <Text style={styles.drawerSub}> One Pot Wonder </Text>
          <Switch ref={'OnePotWonder'} style={styles.toggleBtn} onValueChange={(val) => {console.log(val); }}/>
        </View>

        <View style={styles.drawerBtnPanelWrapper}>
        <View style={styles.drawerBtnPanel}>
          <Text style={styles.textBtn} onPress={() => {
            this.refs['Appetizer'].setState({value: false});
            this.refs['MainCourse'].setState({value: false});
            this.refs['Dessert'].setState({value: false});
            this.refs['Snack'].setState({value: false});
            this.refs['GlutenFree'].setState({value: false});
            this.refs['Under30min'].setState({value: false});
            this.refs['EatFirst'].setState({value: false});
            this.refs['Spicy'].setState({value: false});  
            this.refs['ExtraSpicy'].setState({value: false});
            this.refs['OnePotWonder'].setState({value: false});

          }}> Reset </Text>
          <Text style={styles.textBtn} onPress={() => this.refs['Filter_Drawer'].closeDrawer()}> Accept </Text>
        </View>
        </View>

      </View>
    );

    // +++ RECIPE SEARCH +++
  
    return (

      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={'Filter_Drawer'}
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
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'left'
  },

  toggleBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  drawerBtnPanelWrapper: {
    //position: 'absolute',
    bottom: -75,
  },

  drawerBtnPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textBtn: {
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#fff'
    //backgroundColor: '#ff0000'
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

export default Filter;
