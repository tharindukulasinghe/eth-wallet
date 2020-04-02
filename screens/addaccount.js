import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AddAccountScreen extends Component {
  state = {};

  static navigationOptions = {
    title: 'Add a Account',
  };

  async checkAddress(title, address) {
    fetch(`http://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`)
      .then(response => response.json())
      .then(json => {
        if (!json.error) {
          this.saveAddress(title, address);
        } else {
          alert('Enter valid ERC-20 wallet address');
        }
      })
      .catch(err => false);
  }

  saveAddress = async (title, address) => {
    try {
      var add = await AsyncStorage.getItem('addressesList');
      if (add) {
        var addresses = JSON.parse(add);
        addresses.push({
          title: title,
          address: address,
          key: '' + Date.now(),
        });
        await AsyncStorage.setItem('addressesList', JSON.stringify(addresses));
      } else {
        var addresses = [];
        addresses.push({
          title: title,
          address: address,
          key: '' + Date.now(),
        });
        await AsyncStorage.setItem('addressesList', JSON.stringify(addresses));
      }
      alert('Successfully saved.');
      this.props.navigation.navigate('Accounts');
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#004D40" />
        <Text style={styles.welcome}>Wallet Title</Text>
        <TextInput
          style={styles.welcome}
          placeholder="Main Wallet"
          onChangeText={text => this.setState({title: text})}
        />
        <Text style={styles.welcome}>Enter ERC-20 Wallet Address</Text>
        <TextInput
          style={styles.welcome}
          placeholder="0x"
          onChangeText={text => this.setState({address: text})}
        />
        <Button
          title="Add Wallet"
          onPress={() =>
            this.checkAddress(this.state.title, this.state.address)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginTop: 25,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default AddAccountScreen;
