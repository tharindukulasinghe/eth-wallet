import React, { Component } from "react";
import { View, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, Text, Right } from "native-base";

class CoinFaucetScreen extends Component {
  state = {
    faucets: [
      { name: "CoinFaucet.io", address: "https://coinfaucet.io/" },
      { name: "CoinFaucet.io", address: "https://dash-faucet.com/" },
      { name: "CoinFaucet.io", address: "https://bonusbitcoin.co/" },
      { name: "CoinFaucet.io", address: "https://litecoin-faucet.com/" },
      { name: "CoinFaucet.io", address: "https://greencoin.life/faucet/" }
    ]
  };
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#004D40" />
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 18 }}>Free Coin Faucets</Text>
          </CardItem>
          {this.state.faucets.map(token => {
            return (
              <CardItem bordered key={token.address}>
                <Text style={{ fontSize: 16 }}>{token.address}</Text>
              </CardItem>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default CoinFaucetScreen;
