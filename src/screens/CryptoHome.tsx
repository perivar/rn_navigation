import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { PriceAlert, TransactionHistory } from '../components';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../constants';
import { CustomDrawerScreenProps } from '../types';

const CryptoHome = ({ navigation }: CustomDrawerScreenProps<'HomeTab'>) => {
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);

  const [transactionHistory, setTransactionHistory] = React.useState(
    dummyData.transactionHistory
  );

  // transactionhistory component를 prices랑 home에서 동시 사용
  // prices는 가로(FlatList), home에서는 세로(row)로 사용하는데
  // component는 가로(FlatList)로 정의하였으니
  // home에서 세로(row)로 표시하면서 오류 로그 메시지가 출력
  // 이걸 출력되지 않게 설정
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  function renderHeader() {
    // render each trending item
    const renderItem = ({ item, index }: any) => (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index === 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
        }}
        onPress={() => navigation.navigate('CryptoDetail', { currency: item })}>
        {/* Currency */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                marginTop: 5,
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View
            style={{
              marginLeft: SIZES.base,
            }}>
            <Text
              style={{
                ...FONTS.h2,
              }}>
              {item.currency}
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body3,
              }}>
              {item.code}
            </Text>
          </View>
        </View>

        {/* Value */}
        <View
          style={{
            marginTop: SIZES.radius,
          }}>
          <Text
            style={{
              ...FONTS.h2,
            }}>
            ${item.amount}
          </Text>

          <Text
            style={{
              color: item.type === 'I' ? COLORS.red : COLORS.green,
              ...FONTS.h3,
            }}>
            ${item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View
        style={{
          width: '100%',
          height: 290,
          ...styles.shadow,
        }}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* Header Bar section */}
          <View
            style={{
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.padding,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              onPress={() => navigation.toggleDrawer()}>
              <FontAwesome name="bars" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => console.log('Notification on pressed')}>
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* Balance */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              Your Portfolio Balance
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.h1,
              }}>
              ${dummyData.portfolio.balance}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body5,
              }}>
              {dummyData.portfolio.changes} Last 24 hours
            </Text>
          </View>
          {/* Trending */}
          <View
            style={{
              position: 'absolute',
              bottom: '-30%',
            }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}>
              Trending
            </Text>

            <FlatList
              contentContainerStyle={{
                marginTop: SIZES.base,
              }}
              data={trending}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderAlert() {
    return <PriceAlert />;
  }

  function renderNotice() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          Investing Safety
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          It`s very difficult to time an investment, especially when the market
          is volatile. Learn how to use dollar cost averaging to you advantage.
        </Text>

        <TouchableOpacity
          style={{ marginTop: SIZES.base }}
          onPress={() => console.log('Learn More')}>
          <Text
            style={{
              color: COLORS.green,
              ...FONTS.h3,
            }}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTransactionHistory() {
    return (
      <TransactionHistory
        customContainerStyle={{ ...styles.shadow }}
        history={transactionHistory}
      />
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {/* 밑에 130올린이유 : tab.js에서 transaction부분인 custombottom에서 위로 30만큼 더 올렸으니 scrollview와 겹치지 않게  */}
        {renderHeader()}
        {renderAlert()}
        {renderNotice()}
        {renderTransactionHistory()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default CryptoHome;
