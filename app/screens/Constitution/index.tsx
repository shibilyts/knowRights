import React, {useMemo} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {IThemeState} from '../../models/reducers/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pdfArray from '../../db/pdfData';
import NavigationService from '../../navigation/NavigationService';

interface IState {
  themeReducer: IThemeState;
}

const Constitution: React.FC = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const headerColor = useMemo(() => (isDark ? '#e6d600' : 'black'), [isDark]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderBottomWidth: 0.5,
          borderColor: 'grey',
        }}
        onPress={() =>
          NavigationService.navigate('PdfScreen', {source: item.uri})
        }>
        <Text
          style={{
            color: headerColor,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          {item.title}
        </Text>
        <Icon name={'chevron-right'} size={25} color={headerColor} />
      </TouchableOpacity>
    );
  };

  return <FlatList data={pdfArray} renderItem={renderItem} />;
};

export default Constitution;
