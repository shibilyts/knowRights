import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import {IThemeState} from '../../models/reducers/theme';
import ipc from '../../db/ipc';
import crpc from '../../db/crpc';
import cpc from '../../db/cpc';
import mva from '../../db/mva';
import ida from '../../db/ida';
import nia from '../../db/nia';
import iea from '../../db/iea';
import RenderScene from '../../components/RenderScene';

interface IState {
  themeReducer: IThemeState;
}
const data = [
  {
    key: 'ipc',
    title: 'IPC',
    data: ipc,
    header: 'Indian Penal Code, 1860 (IPC India, Act No. 45 OF 1860)',
  },
  {
    key: 'crpc',
    title: 'CrPC',
    data: crpc,
    header: 'Code of Criminal Procedure, 1973 (CrPC India, Act No. 2 OF 1974)',
  },
  {
    key: 'iea',
    title: 'IEA',
    data: iea,
    header: 'Indian Evidence Act, 1872 (IEA India, Act No. 1 OF 1872)',
  },
  {
    key: 'nia',
    title: 'NIA',
    data: nia,
    header: 'Negotiable Instruments Act, 1881 (NIA India, Act No. 26 OF 1881)',
  },
  {
    key: 'ida',
    title: 'IDA',
    data: ida,
    header: 'Indian Divorce Act, 1869 (IDA India, Act No. 4 OF 1869)',
  },
  {
    key: 'mva',
    title: 'MVA',
    data: mva,
    header: 'The Motor Vehicles Act, 1988 (MVA India, Act No. 59 OF 1988)',
  },
  {
    key: 'cpc',
    title: 'CPC',
    data: cpc,
    header: 'Civil Procedure Code, 1908 (CPC India, Act No. 5 OF 1908)',
  },
];

const Home = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'ipc', title: 'IPC'},
    {key: 'crpc', title: 'CrPC'},
    {key: 'iea', title: 'IEA'},
    {key: 'nia', title: 'NIA'},
    {key: 'ida', title: 'IDA'},
    {key: 'mva', title: 'MVA'},
    {key: 'cpc', title: 'CPC'},
  ]);

  return (
    <>
      <TabView
        lazy
        navigationState={{index, routes}}
        renderScene={SceneMap({
          ipc: () => RenderScene(data[0]),
          crpc: () => RenderScene(data[1]),
          iea: () => RenderScene(data[2]),
          nia: () => RenderScene(data[3]),
          ida: () => RenderScene(data[4]),
          mva: () => RenderScene(data[5]),
          cpc: () => RenderScene(data[6]),
        })}
        swipeEnabled={false}
        renderTabBar={props => (
          <TabBar
            {...props}
            tabStyle={{
              backgroundColor: '#b8ab00',
              borderLeftWidth: 0.2,
              borderColor: '#e6d600',
            }}
            scrollEnabled
            bounces
            labelStyle={{
              fontWeight: 'bold',
              color: isDark ? '#4d4700' : undefined,
            }}
            activeColor={isDark ? 'yellow' : undefined}
            pressColor="white"
            indicatorStyle={{backgroundColor: 'pink', height: 100}}
          />
        )}
        onIndexChange={i => {
          setIndex(i);
        }}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    </>
  );
};

export default Home;
