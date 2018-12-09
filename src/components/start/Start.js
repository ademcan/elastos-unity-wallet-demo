import React, { Component } from 'react';
import {
    Button,View
} from 'react-native';
import styles from '../start/Style';

class Start extends Component {

    constructor(props) {
      super(props);
      console.log('Start : constructor');
    }
  
    componentDidMount() {
      console.log('Start : componentDidMount');
    }
  
    componentWillUnmount() {
      console.log('Start : componentWillUnmount');
    }

    importClicked = () => {
      console.log('Start : importClicked');
      const { navigation } = this.props;
      navigation.navigate('Import');
    }

    createClicked = () => {
      console.log('Start : createClicked');
      const { navigation } = this.props;
      navigation.navigate('Create');
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Button
              onPress={this.createClicked}
              title="Create"
              color="#841584"/>
            <Button
              onPress={this.importClicked}
              title="Import"
              color="#841584"/>
        </View>
      );
    }
  }

  export default Start