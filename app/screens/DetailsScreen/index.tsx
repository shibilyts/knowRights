import React, {useMemo, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IThemeState} from '../../models/reducers/theme';

import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

interface IState {
  themeReducer: IThemeState;
}

const DetailsPage: React.FC = ({route}) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const headerColor = useMemo(() => (isDark ? '#e6d600' : 'black'), [isDark]);
  const desColor = useMemo(() => (isDark ? 'gray' : 'black'), [isDark]);
  const details = route.params.item;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/coi_logo.png')}
          style={{
            width: 150,
            height: 150,
            resizeMode: 'contain',
            tintColor: isDark ? 'white' : undefined,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            color: headerColor,
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}>
          Section {details.Section || details.section}
        </Text>
        {details.chapter && (
          <Text
            style={{
              color: 'gray',
              fontWeight: 'bold',
              fontSize: 13,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}>
            {`Chapter ${details.chapter}: ${details.chapter_title}`}
          </Text>
        )}
        <Text
          style={{
            color: headerColor,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            textTransform: 'capitalize',
          }}>
          {details.section_title ? details.section_title : details?.title}
        </Text>
        <Text
          style={{
            color: desColor,
            fontSize: 16,
            marginTop: 30,
            lineHeight: 25,
            textAlign: 'justify',
          }}>
          {details?.section_desc || details.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailsPage;
