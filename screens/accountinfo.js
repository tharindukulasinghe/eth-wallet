import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import {Card, CardItem, Body, Text, Right} from 'native-base';

class AccountInfoScreen extends Component {
  state = {
    item: {
      title: '',
      addInfo: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Wallet Info',
    };
  };

  componentDidMount() {
    const {route} = this.props;
    const address = route.params.item;
    this.setState({address: address});
    //alert(address);

    fetch(`http://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`)
      .then(response => response.json())
      .then(json => {
        this.setState({addInfo: json, isLoading: false});
      })
      .catch(err => alert('Error : ' + err));
  }

  getETHbalance() {
    //const balance = JSON.parse(this.state.addInfo).ETH.balance;
    var balance = this.state.addInfo.ETH.balance;
    if (balance === false) {
      return 0;
    }
    return balance;
  }

  getTokens() {
    var tokens = this.state.addInfo.tokens;

    return tokens ? tokens : [];
  }

  format(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView style={{margin: 3}}>
        <StatusBar backgroundColor="#004D40" />
        <Card>
          <CardItem header bordered>
            <Text style={{fontSize: 18}}>ETH Balance</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{fontSize: 18}}>
                {this.getETHbalance() + ' ETH'}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text style={{fontSize: 18}}>Token Balance</Text>
          </CardItem>
          {this.getTokens().map(token => {
            return (
              <CardItem bordered key={token.tokenInfo.address}>
                <Text style={{fontSize: 16}}>{token.tokenInfo.name}</Text>
                <Right style={{flex: 1}}>
                  <Text
                    style={{fontSize: 16, textAlign: 'right', marginRight: 3}}>
                    {this.format(
                      token.balance.toPrecision() /
                        Math.pow(10, parseInt(token.tokenInfo.decimals)),
                    ) +
                      ' ' +
                      token.tokenInfo.symbol}
                  </Text>
                </Right>
              </CardItem>
            );
          })}
        </Card>
      </ScrollView>
    );
  }
}

export default AccountInfoScreen;
