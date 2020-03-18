import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
      margin: 19,
      fontSize: 22,
    },
  });

class Dumpster extends React.Component {
  static navigationOptions = {
    title: 'Dumpster',
  };
  render() {
    const { id } = this.props.navigation.state.params; // B
    
    return ( // C
      <View>
        <Text style={styles.text}>{'hi'}</Text>
      </View>
    )
  }
}

export default Dumpster;