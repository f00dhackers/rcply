
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

class Rcply extends React.Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'WelcomeView', component: WelcomeView}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
                renderScene={(route, navigator) => {
                    // count the number of func calls
                    console.log(route, navigator); 

                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}
             />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 100,
  },
  FeedView: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  FoooView: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  WelcomeView: {
    color: '#333333',
    marginBottom: 5,
  },
});

class FeedView extends React.Component {
     onPressFooo() {
        this.props.navigator.push({
            name: 'FoooView',
            component: FoooView
        });
    }
    onPressWelcome() {
        this.props.navigator.push({
            name: 'WelcomeView',
            component: WelcomeView
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome} onPress={this.onPressWelcome.bind(this)}>
                    Welcome View!
                </Text>

                <Text onPress={this.onPressFooo.bind(this)}>
                    Go to foooooo!
                </Text>

                <Text>
                    Go to feed!
                </Text>

            <Text>
              This is Feeeed!!!!
            </Text>


            </View>
             
        );
    }

}

class FoooView extends React.Component {
    onPressFeed() {
        this.props.navigator.push({
            name: 'FeedView',
            component: FeedView
        });
    }
    onPressWelcome() {
        this.props.navigator.push({
            name: 'WelcomeView',
            component: WelcomeView
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressWelcome.bind(this)}>
                    Welcome View!
                </Text>

                <Text>
                    Go to foooooo!
                </Text>

                <Text onPress={this.onPressFeed.bind(this)}>
                    Go to feed!
                </Text>

            <Text>
              This is Foooooo!!!!
            </Text>


            </View>
             
        );
    }

}


class WelcomeView extends React.Component {
    onPressFeed() {
        this.props.navigator.push({
            name: 'FeedView',
            component: FeedView
        });
    }
    onPressFooo() {
        this.props.navigator.push({
            name: 'FoooView',
            component: FoooView
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome View!
                </Text>

                <Text onPress={this.onPressFooo.bind(this)}>
                    Go to foooooo!
                </Text>

                <Text onPress={this.onPressFeed.bind(this)}>
                    Go to feed!
                </Text>


 
            <Text>
              This is Welcome!!!!
            </Text>

            </View>

        );
    }
}

AppRegistry.registerComponent('Rcply', () => Rcply);

