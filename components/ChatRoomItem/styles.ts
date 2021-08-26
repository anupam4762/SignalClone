import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
    },
  
    text: {
      color: 'grey',
    },
  
    rightContainer: {
      flex: 1,
      justifyContent: 'center',
    },
  
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  
    },
  
    name:{
      fontWeight: 'bold',
      fontSize:16,
      color: 'black',
      marginBottom: 3
    },
  
    image: {
      width: 50,
      height: 50,
      borderRadius: 30,
      marginRight: 10,
    }, 
  
    badgeContainer: {
      backgroundColor: '#3872e9',
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      borderWidth: 1,
      borderColor: 'white',
      position: 'absolute',
      left: 45,
      top: 10,
    },
  
    badgeText: {
      color: 'white',
      fontSize: 12
    }
  });

  export default styles;