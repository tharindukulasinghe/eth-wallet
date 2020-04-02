import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {CardItem, Text, Button, Left, Right} from 'native-base';

class HomeScreen extends Component {
  state = {};

  static navigationOptions = {
    title: 'My ETH Wallet',
  };

  componentDidMount() {
    //AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            margin: 10,
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}>
          <StatusBar backgroundColor="#004D40" />
          <TouchableOpacity onPress={() => this.goToAccounts()}>
            <CardItem>
              <Left />
              <Button
                style={{margin: 30}}
                large
                onPress={() => this.goToAccounts()}>
                <Text> My Wallets </Text>
              </Button>
              <Right />
            </CardItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToTopTokens()}>
            <CardItem>
              <Left />
              <Button
                style={{margin: 30}}
                large
                success
                onPress={() => this.goToTopTokens()}>
                <Text> Top Tokens </Text>
              </Button>
              <Right />
            </CardItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.showRewarded()}>
            <CardItem>
              <Left />
              <Button
                style={{margin: 30}}
                large
                info
                onPress={() => this.showRewarded()}>
                <Text> Coin Faucets </Text>
              </Button>
              <Right />
            </CardItem>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  bannerError = e => {
    alert(e);
  };

  goToAccounts() {
    this.props.navigation.navigate('Accounts');
  }

  goToTopTokens() {
    this.props.navigation.navigate('TopTokens');
  }

  showVideoAd() {
    //AdMobRewarded.requestAd().then(AdMobRewarded.showAd());
    //alert("No coin faucets available!");
  }

  showRewarded() {
    this.props.navigation.navigate('CoinFaucet');
    /* AdMobRewarded.showAd()
      .catch(error => console.warn(error))
      .then(() => {
        //AdMobRewarded.requestAd().catch(error => console.warn(error));
        this.props.navigation.navigate("CoinFaucet");
      }); */
  }
}

export default HomeScreen;

/* <CardItem>
<Left />
<Button
  style={{ margin: 10 }}
  success
  large
  bordered
  onPress={() => this.goToAccounts()}
>
  <Text> My Wallets </Text>
</Button>
<Right />
</CardItem>
<CardItem>
<Left />
<Button
  style={{ margin: 10 }}
  info
  large
  bordered
  onPress={() => this.goToTopTokens()}
>
  <Text> Top Tokens </Text>
</Button>
<Right />
</CardItem> */
