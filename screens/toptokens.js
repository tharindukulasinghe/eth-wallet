import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator, StatusBar } from "react-native";
import { Card, CardItem, Body, Text, Right } from "native-base";

class TopTokenScreen extends Component {
  state = {};

  static navigationOptions = {
    title: "Top tokens"
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    fetch(`http://api.ethplorer.io/getTop?limit=10&apiKey=freekey&criteria=cap`)
      .then(response => response.json())
      .then(json => {
        this.getActiveTokens(json);
      })
      .catch(err => alert("Error : " + err));
  }

  getTokens() {
    var tokens = this.state.tokens.tokens;
    return tokens;
  }

  getTopTokens() {
    var tokens = this.state.toptokens.tokens;
    return tokens;
  }

  getActiveTokens(tokens) {
    fetch(`http://api.ethplorer.io/getTopTokens?limit=10&apiKey=freekey`)
      .then(response => response.json())
      .then(json => {
        this.setState({ toptokens: json, isLoading: false, tokens: tokens });
      })
      .catch(err => alert("Error : " + err));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <ScrollView style={{ margin: 3 }}>
        <StatusBar backgroundColor="#004D40" />
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 18 }}>
              Top 10 Tokens by Capitalization
            </Text>
          </CardItem>
          {this.getTokens().map(token => {
            return (
              <CardItem bordered key={token.address}>
                <Text style={{ fontSize: 16 }}>{token.name}</Text>
                <Right style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 16, textAlign: "right", marginRight: 6 }}
                  >
                    {token.symbol}
                  </Text>
                </Right>
              </CardItem>
            );
          })}
        </Card>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontSize: 18 }}>Top 10 Most Active Tokens</Text>
          </CardItem>
          {this.getTopTokens().map(token => {
            return (
              <CardItem bordered key={token.address}>
                <Text style={{ fontSize: 16 }}>{token.name}</Text>
                <Right style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 16, textAlign: "right", marginRight: 6 }}
                  >
                    {token.symbol}
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

export default TopTokenScreen;
