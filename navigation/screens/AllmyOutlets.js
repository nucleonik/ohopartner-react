import React from 'react';
import { View } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'expo-linear-gradient';

const AllmyOutlets = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <ShimmerPlaceholder
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        shimmerColors={['#f5f5f5', '#FFFFFF', '#564d4d']}
      ></ShimmerPlaceholder>
    </View>
  );
};

export default AllmyOutlets;
