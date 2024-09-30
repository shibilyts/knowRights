import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {IThemeState} from '../../models/reducers/theme';
import styles from './styles';
import Pdf from 'react-native-pdf';

interface IState {
  themeReducer: IThemeState;
}

const PdfScreen: React.FC = ({route}) => {
  //   const {source} = route.params;
  console.log(route.params);
  return (
    <Pdf
      trustAllCerts={false}
      source={require('../../assets/pdf/english2024.pdf')}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`Number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`Current page: ${page}`);
      }}
      onError={error => {
        console.log(error);
      }}
      onPressLink={uri => {
        console.log(`Link pressed: ${uri}`);
      }}
      style={styles.pdf}
      horizontal={true}
      showsHorizontalScrollIndicator
      enablePaging
      showsVerticalScrollIndicator
    />
  );
};

export default PdfScreen;
