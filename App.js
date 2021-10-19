/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Text, View} from 'react-native';

const App = () => {
  const style = {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    lineHeight: 16,
  };
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 200,
          height: 100,
        }}>
        <Text
          style={style}
          onLayout={event =>
            console.log({
              which: 1,
              layout: event.nativeEvent.layout,
              platfrom: Platform.OS,
            })
          }>
          regular TEXT.
        </Text>
        <Text
          style={style}
          onLayout={event =>
            console.log({
              which: 2,
              layout: event.nativeEvent.layout,
              platfrom: Platform.OS,
            })
          }>
          ALL CAPS text.
        </Text>
        <Text
          style={[style, {fontFamily: 'Iosevka'}]}
          onLayout={event =>
            console.log({
              which: 3,
              layout: event.nativeEvent.layout,
              platfrom: Platform.OS,
            })
          }>
          regular TEXT.
        </Text>
        <Text
          style={[style, {fontFamily: 'Iosevka'}]}
          onLayout={event =>
            console.log({
              which: 4,
              layout: event.nativeEvent.layout,
              platfrom: Platform.OS,
            })
          }>
          ALL CAPS text.
        </Text>
      </View>
    </View>
  );
};

export default App;
