import React, {Component} from 'react';
import {
  //   KeyboardAvoidingView,
  SafeAreaView,
  //   ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
  render() {
    const {id} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <KeyboardAvoidingView
            behavior={'padding'}
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ScrollView style={{flexGrow: 1, borderWidth: 1}}> */}
          <TextInput
            placeholder="Enter Asteroid ID"
            style={styles.inputStyle}
            onChangeText={id => this.setState({id})}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            disabled={id.length > 0 ? false : true}
            style={{
              width: '80%',
              borderRadius: 15,
              height: 40,
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: id.length > 0 ? '#03A9F4' : 'grey',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              borderRadius: 15,
              borderWidth: 1,
              height: 40,
              marginTop: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#03A9F4',
            }}>
            <Text
              style={{
                color: '#03A9F4',
                fontSize: 20,
              }}>
              Random Asteroid
            </Text>
          </TouchableOpacity>
          {/* </ScrollView>
          </KeyboardAvoidingView> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '80%',
    borderRadius: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#03A9F4',
    color: '#03A9F4',
  },
});
