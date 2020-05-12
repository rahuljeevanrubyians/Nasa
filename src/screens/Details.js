import React, {Component} from 'react';
import {
  //   KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}>
            Submit
          </Text>

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
