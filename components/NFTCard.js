import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, assets, SHADOWS, SIZES } from '../constants';
import { CircleButton, RectButton } from './Button';
import { NFTTitle, EthPrice, SubInfo } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
          source={data.item.image}
          resizeMode='cover'
        />
        <CircleButton right={10} top={10} imgUrl={assets.heart} />
      </View>
      <SubInfo />
      <View
        style={{
          width: '100%',
          padding: SIZES.font,
        }}
      >
        <NFTTitle
          title={data.item.name}
          subTitle={data.item.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <EthPrice price={data.item.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
