/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Config from 'react-native-config';
import StorybookUI from './storybook';

// export default from './storybook';

type Props = {};
export default class App extends Component<Props> {
  render() {
    if (Config.IS_STORYBOOK === 'true') {
      return <StorybookUI />;
    }

    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/images/bitrise.png')}
          style={styles.image}
        />
        <Text style={styles.welcome}>React Native</Text>
        <Text style={styles.welcome}>Bitrise Sample Project</Text>
        <Text style={styles.instructions}>
          Customise by editing the bitrise.yml.
        </Text>
        <Text style={styles.instructions}>Storybook</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#683D87',
  },
  image: {
    height: 150,
    width: 150,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 10,
  },
});
