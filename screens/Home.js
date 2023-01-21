import { Text, FlatList, SafeAreaView, View } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            ListHeaderComponent={HomeHeader}
            keyExtractor={item => item.id}
            renderItem={(itemData) => <NFTCard data={itemData} />}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}>
          <View style={{ height: 300, backgroundColor: 'red' }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home