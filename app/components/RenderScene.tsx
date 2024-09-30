import React, {useMemo, useRef, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import NavigationService from '../navigation/NavigationService';

const RenderScene = sceneData => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const [searchText, setSearchText] = useState('');
  const flatListRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const headerColor = useMemo(() => (isDark ? '#e6d600' : 'black'), [isDark]);
  const desColor = useMemo(() => (isDark ? 'gray' : 'black'), [isDark]);
  const returnData = listData => {
    let selectedData = listData;
    if (searchText.length > 0) {
      selectedData = selectedData.filter(
        item =>
          item?.Section?.toString().includes(searchText) ||
          item?.section?.toString().includes(searchText) ||
          item?.section_title?.includes(searchText) ||
          item?.title?.includes(searchText),
      );
    }
    return selectedData;
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '100%',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        paddingVertical: 15,
        paddingHorizontal: 10,
      }}
      onPress={() => NavigationService.navigate('DetailsPage', {item})}>
      <Text style={{color: headerColor, fontWeight: 'bold'}}>
        Section: {item.Section ? item?.Section : item?.section}
      </Text>
      <Text style={{fontSize: 14, color: headerColor}}>
        {item.section_title ? item.section_title : item?.title}
      </Text>
      <Text
        style={{fontSize: 12, color: desColor, width: '80%', marginTop: 10}}
        numberOfLines={3}>
        {item?.section_desc || item.description}
      </Text>
    </TouchableOpacity>
  );
  const scrollToTop = () => {
    flatListRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  };
  return (
    <>
      <ParallaxScrollView
        backgroundColor="transparent"
        contentBackgroundColor="transparent"
        parallaxHeaderHeight={120}
        ref={flatListRef}
        nestedScrollEnabled
        fadeOutForeground
        scrollEvent={e => {
          if (e.nativeEvent.contentOffset.y > 100 && !showScrollToTop) {
            setShowScrollToTop(true);
          }
          if (e.nativeEvent.contentOffset.y <= 100 && showScrollToTop) {
            setShowScrollToTop(false);
          }
        }}
        renderForeground={() => (
          <View>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 15,
                fontSize: 18,
                paddingHorizontal: 15,
                textAlign: 'center',
                color: headerColor,
                textDecorationLine: 'underline',
              }}>
              {sceneData.header}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginTop: 10,
                width: '80%',
                backgroundColor: '#b8ab00',
                height: 35,
                borderRadius: 30,
                alignSelf: 'center',
              }}>
              <TextInput
                onChangeText={text => setSearchText(text)}
                style={{width: '95%', height: '100%', color: 'white'}}
                value={searchText}
                placeholder="Search"
                placeholderTextColor={'grey'}
              />
              <TouchableOpacity
                onPress={() => (searchText.length ? setSearchText('') : null)}>
                {searchText.length ? (
                  <Icon
                    name={'close-circle-outline'}
                    size={20}
                    color={'grey'}
                  />
                ) : (
                  <Icon name={'magnify'} size={25} color={'grey'} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}>
        <FlatList
          data={returnData(sceneData.data)}
          renderItem={renderItem}
          initialNumToRender={5}
          nestedScrollEnabled
          keyExtractor={(item, i) => sceneData.key + i}
        />
      </ParallaxScrollView>
      {showScrollToTop && (
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(184, 171, 0, 0.5)',
            width: 60,
            height: 60,
            borderRadius: 30,
            position: 'absolute',
            bottom: 20,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => scrollToTop()}>
          <Icon name={'chevron-up'} size={25} color={desColor} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default RenderScene;
