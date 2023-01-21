import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { COLORS, assets, SHADOWS, SIZES } from '../constants';
import { CircleButton } from './Button';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{
        width: '100%',
        height: 250
      }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
          source={data.item.image}
          resizeMode='cover'
        />
        <CircleButton right={10} top={10} imgUrl={assets.heart} />
      </View>
    </View>
  )
}

export default NFTCard