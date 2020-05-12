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
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import {fetchData} from '../ducks/fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      isLoading: false,
    };
  }

  //   3726710
  _fetchData = () => {
    console.log('inside _fetchData ');
    const {id} = this.state;
    this.setState({isLoading: true});
    this.props.fetchData(id).then(() => {
      console.log('test', this.props.fetch);
      this.setState({isLoading: false});
      const {error, data} = this.props.fetch;
      if (error) {
        alert('Error');
      }
      if (data) {
        this.props.navigation.navigate('DETAILS');
      }
    });
  };

  render() {
    const {id, isLoading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Loader visible={isLoading} />
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
            onPress={() => this._fetchData()}
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

const mapStateToProps = state => {
  console.log('state', state);
  return {
    fetch: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: id => dispatch(fetchData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
