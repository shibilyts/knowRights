import React from 'react';
import {View} from 'react-native';

import {useDispatch} from 'react-redux';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();

  return <View style={styles.container}></View>;
};

export default Home;
