import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

const Label = ({children, label, labelStyle, subLabel, subLabelStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={labelStyle}>{label}</Text>
      {children}
      {subLabel && <Text style={subLabelStyle}>{subLabel}</Text>}
    </View>
  );
};

export default Label;