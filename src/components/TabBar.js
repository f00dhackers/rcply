import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const tabIcons = [
  'list-alt',
  'home',
  'shopping-basket',
  'bars'
];

// TODO: Fix tab icon colors
class TabBar extends Component {

  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  }

  componentDidMount() {
    /* this.setAnimationValue({ value: this.props.activeTab });
       this._listener = this.props.scrollValue.addListener(this.setAnimationValue); */
  }

  /* setAnimationValue({ value, }) {
     tabIcons.forEach((icon, i) => {
     const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
     icon.setNativeProps({
     style: {
     color: this.iconColor(progress)
     }
     });
     });
     } */

  /* iconColor(progress) {
     const red = 59 + (204 - 59) * progress;
     const green = 89 + (204 - 89) * progress;
     const blue = 152 + (204 - 152) * progress;
     return `rgb(${red}, ${green}, ${blue})`;
     } */

  // NOTE: Hackity hack, boo hardcoding
  getTabTitle(index) {
    switch (index) {
      case 0:
      return 'Recipes'
      break;
      case 1:
      return 'I Have'
      break;
      case 2:
      return 'I Need'
      break;
      case 3:
      return 'More'
      break;
    }
  }

  render() {
    const { activeTab } = this.props

    const tabWidth = this.props.containerWidth / this.props.tabs.length;
    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ],
      outputRange: [0, tabWidth ]
    });

    // TODO: Move repetitive style condition to class method.
    return (
      <View>
        <View style={[styles.tabs, this.props.style, ]}>
          {this.props.tabs.map((tab, i) => {
             return (
               <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                 <Icon
                   name={tab}
                   size={30}
                   color={activeTab === i ? '#fff' : '#556f07'}
                   ref={(icon) => {tabIcons[i] = icon;}}
                 />
                 <Text style={activeTab === i && styles.activeTabTextColor}>
                   {this.getTabTitle(i)}
                 </Text>
               </TouchableOpacity>
             );
           })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  activeTabTextColor: {
    color: '#fff'
  },
  tabs: {
    height: 70,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#91C11E',
    borderBottomColor: 'rgba(0,0,0,0.05)'
  }
});

export default TabBar;
