import React, {Component} from 'react';
import {
  //   KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {data} = this.props.fetch;

    //     name
    // - nasa_jpl_url
    // - is_potentially_hazardous_asteroid
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: 'absolute',
            left: 20,
            top: 20,
          }}>
          <Text
            style={{
              fontSize: 80,
            }}>
            ↩︎
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              width: '80%',
              borderRadius: 15,
              justifyContent: 'center',
              paddingLeft: 10,
              borderColor: '#03A9F4',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'grey',
              }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#03A9F4',
              }}>
              {data.name}
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              width: '80%',
              borderRadius: 15,
              justifyContent: 'center',
              paddingLeft: 10,
              borderColor: '#03A9F4',
              marginTop: 25,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'grey',
              }}>
              Jet Propulsion Laboratory URL
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#03A9F4',
              }}>
              {data.nasa_jpl_url}
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              width: '80%',
              borderRadius: 15,
              justifyContent: 'center',
              paddingLeft: 10,
              borderColor: '#03A9F4',
              marginTop: 25,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'grey',
              }}>
              Is Potentiallu Hazardous Asteroid?
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#03A9F4',
              }}>
              {data.is_potentially_hazardous_asteroid
                ? data.is_potentially_hazardous_asteroid
                : false}
            </Text>
          </View>

          {/* </ScrollView>
          </KeyboardAvoidingView> */}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetch: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
