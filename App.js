import React, {Fragment} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDrawer: false,
    };
  }

  toggle = () => {
    this.setState({toggleDrawer: !this.state.toggleDrawer});
  };

  render() {
    return (
      <View style={styles.container} onTouchEnd={this.toggle}>
        <Fragment>
          <TouchableOpacity onPress={this.toggle}>
            <Text>Toggle Me</Text>
          </TouchableOpacity>

          {this.state.toggleDrawer && (
            <View style={styles.menu}>
              <Text>Sidebar</Text>
            </View>
          )}
        </Fragment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'yellow',
    position: 'absolute',
    left: 0,
    top: 0,
    width: width * 0.8,
    height: height,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    zIndex: 999,
  },
});

export default App;
