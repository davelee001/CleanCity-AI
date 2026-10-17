import React from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';

// Decorative SVGs are served locally on web; native keeps its existing gradient.
export default function CleaningBackground({ compact = false }) {
  const { width } = useWindowDimensions();
  if (Platform.OS !== 'web') return null;
  const small = width < 760;
  const illustration = (name, style) => React.createElement('img', {
    src: `/backgrounds/${name}.svg`,
    alt: '',
    draggable: false,
    decoding: 'async',
    style: { position: 'absolute', objectFit: 'contain', userSelect: 'none', ...style },
  });

  return (
    <View pointerEvents="none" aria-hidden={true} style={styles.layer}>
      {illustration('clean-street', {
        width: small ? 780 : '85%', maxWidth: 1250,
        height: compact ? 300 : 480, left: small ? -200 : '-5%',
        bottom: compact ? -90 : -35, opacity: compact ? 0.15 : 0.24,
      })}
      {!compact && illustration('broom', {
        width: small ? 140 : 220, height: small ? 165 : 260,
        left: small ? -35 : '3%', top: small ? -25 : '6%',
        transform: 'rotate(-12deg)', opacity: 0.18,
      })}
      {illustration('recycling', {
        width: small ? 130 : 200, height: small ? 140 : 220,
        right: small ? -35 : '4%', top: compact ? 10 : '4%',
        transform: 'rotate(10deg)', opacity: compact ? 0.13 : 0.18,
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  layer: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
});
