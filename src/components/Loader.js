import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';

const Loader = props => {
  const {visible} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={visible}
      onRequestClose={() => {
        return null;
      }}>
      <ActivityIndicator />
    </Modal>
  );
};

export default Loader;
