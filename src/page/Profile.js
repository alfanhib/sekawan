import React from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import WebView from 'react-native-webview';

const Profile = ({navigation}) => {
  // render webview with url https://www.linkedin.com/in/andriawan/
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: 'purple',
          margin: 10,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Back</Text>
      </Pressable>
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://www.alfanhib.com'}}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator color="purple" size="large" />
          )}
          javaScriptEnabled={true}
        />
      </View>
    </View>
  );
};

export default Profile;
