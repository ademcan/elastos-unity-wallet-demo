import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { Button,View,Text } from 'react-native'; // eslint-disable-line no-unused-vars
import RNElastosMainchain from 'react-native-elastos-wallet-core';
import styles from './Style';

class Start extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
  }

  // componentDidMount() {
  //   this.CreateWallet()
  // }

  componentWillUnmount() {
  }

  GetBalance = () => {
    RNElastosMainchain.GetBalance(0, (err, res) => {
      this.setState({result: parseFloat(res / 100000000).toFixed(2)})
    });
  }

  CreateAddress = () => {
    RNElastosMainchain.CreateAddress( (err, res) => {
      this.setState({result: res})
    });
  }

  GetAllTransaction = () => {
    RNElastosMainchain.GetAllTransaction( (err, res) => {
      this.setState({result: res})
    });
  }

  sendClicked = () => {
    RNElastosMainchain.Send(this.state.sendingamount, this.state.toaddress, true, (err, res) => {
      this.setState({result: res})
    });
  }

  exportClicked = () => {
    RNElastosMainchain.ExportWalletWithMnemonic("elastos2018", (err, res) => {
      this.setState({result: res})
    });
  }

  GetMultiSignPubKeyWithMnemonic = () => {
    RNElastosMainchain.GetMultiSignPubKeyWithMnemonic("cry mechanic bean they discover vendor couple adapt walk room edit dinner", (err, res) => {
      this.setState({result: res})
    });
  }

  GetMultiSignPubKeyWithPrivKey = () => {
    RNElastosMainchain.GetMultiSignPubKeyWithPrivKey("", (err, res) => {
      this.setState({result: res})
    });
  }

  GetPublicKey = () => {
    RNElastosMainchain.GetPublicKey((err, res) => {
      this.setState({result: res})
    });
  }

  IsAddressValid = () => {
    RNElastosMainchain.IsAddressValid("EWzDfqRmfYKHhg2V4gPGz3jQJkZU97grow", (err, res) => {
      if (res == true) {
        this.setState({result: "True"})
      } else {
        this.setState({result: "False"})
      }
    });
  }

  GetSupportedChains = () => {
    RNElastosMainchain.GetSupportedChains((err, res) => {
      this.setState({result: JSON.stringify(res)})
    });
  }

  ChangePassword = () => {
    RNElastosMainchain.ChangePassword("elastos2018","elastos2018", (err, res) => {
      this.setState({result: res})
    });
  }

  GetBalanceInfo = () => {
    RNElastosMainchain.GetBalanceInfo((err, res) => {
      this.setState({result: res})
    });
  }

  GetBalanceWithAddress = () => {
    RNElastosMainchain.GetBalanceWithAddress(this.state.toaddress, (err, res) => {
      this.setState({result: res})
    });
  }

  GetAllAddress = () => {
    RNElastosMainchain.GetAllAddress((err, res) => {
      this.setState({result: res})
    });
  }

  GenerateMnemonic = () => {
    RNElastosMainchain.GenerateMnemonic( (err, res) => {
      // this.setState({seedText: res})
      this.setState({result: res})
    });
  }

  CreateWallet = () => {
    RNElastosMainchain.CreateWallet("cry mechanic bean they discover vendor couple adapt walk room edit dinner" , (err, res) => {
      this.setState({result: res})
    });
  }

  ImportWallet = () => {
    RNElastosMainchain.ImportWalletWithMnemonic("cry mechanic bean they discover vendor couple adapt walk room edit dinner", (err, res) => {
      this.setState({result: res})
    })
  }

  render() {

    return (
      <View style={styles.container}>
          <Text testID={'txt:Result'} accessibilityLabel={"txt:Result"} style={styles.result}>{this.state.result}</Text>

          {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
            <Button
              onPress={this.GetBalance}
              title="GetBalance"/>
          </View> */}

          <View style={styles.buttonView}>
            <Button
              testID={'btn:GenerateMnemonic'}
              accessibilityLabel={"btn:GenerateMnemonic"}
              onPress={this.GenerateMnemonic}
              title="GenerateMnemonic"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:CreateWallet'}
              accessibilityLabel={"btn:CreateWallet"}
              onPress={this.CreateWallet}
              title="CreateWallet"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:ImportWallet'}
              accessibilityLabel={"btn:ImportWallet"}
              onPress={this.ImportWallet}
              title="ImportWallet"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:CreateAddress'}
              accessibilityLabel={"btn:CreateAddress"}
              onPress={this.CreateAddress}
              title="CreateAddress"/>
          </View>

          {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
            <Button
              onPress={this.GetAllTransaction}
              title="GetAllTransaction"/>
          </View> */}

          <View style={styles.buttonView}>
            <Button
              testID={'btn:GetBalanceInfo'}
              accessibilityLabel={"btn:GetBalanceInfo"}
              onPress={this.GetBalanceInfo}
              title="GetBalanceInfo"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:exportClicked'}
              accessibilityLabel={"btn:exportClicked"}
              onPress={this.exportClicked}
              title="Export Wallet"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:ChangePassword'}
              accessibilityLabel={"btn:ChangePassword"}
              onPress={this.ChangePassword}
              title="ChangePassword"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:GetMultiSignPubKeyWithMnemonic'}
              accessibilityLabel={"btn:GetMultiSignPubKeyWithMnemonic"}
              onPress={this.GetMultiSignPubKeyWithMnemonic}
              title="GetMultiSignPubKeyWithMnemonic (Android only)"/>
          </View>

          {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
            <Button
              onPress={this.GetMultiSignPubKeyWithPrivKey}
              title="GetMultiSignPubKeyWithPrivKey"/>
          </View> */}

          <View style={styles.buttonView}>
            <Button
              testID={'btn:GetPublicKey'}
              accessibilityLabel={"btn:GetPublicKey"}
              onPress={this.GetPublicKey}
              title="GetPublicKey"/>
          </View>

          <View style={styles.buttonView}>
            <Button
              testID={'btn:GetSupportedChains'}
              accessibilityLabel={"btn:GetSupportedChains"}
              onPress={this.GetSupportedChains}
              title="GetSupportedChains"/>
          </View>

          {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
            <Button
              onPress={this.GetAllAddress}
              title="GetAllAddress"/>
          </View> */}

          <View style={styles.buttonView}>
            <Button
              testID={'btn:IsAddressValid'}
              accessibilityLabel={"btn:IsAddressValid"}
              onPress={this.IsAddressValid}
              title="IsAddressValid"/>
          </View>

          {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
            <Button
              onPress={this.GetBalanceWithAddress}
              title="GetBalanceWithAddress"/>
          </View> */}

          {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
            <Button
              onPress={this.sendClicked}
              title="SEND"/>
          </View> */}
      
      </View>
    );
  }
}

export default Start