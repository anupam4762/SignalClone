import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummyData/ChatRooms';

export default function TabOneScreen() {
  return (
   <View style={styles.page}>
     <FlatList 
      data={chatRoomsData}
      renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
      showsVerticalScrollIndicator={false}
      //ListHeaderComponent={() => <Text>Hello</Text>}
     />
   </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
})