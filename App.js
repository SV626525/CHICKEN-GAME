import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends React.Component {
 constructor(){
 super()
 this.state={count:0}
 }

  render() {
    return (
      <View>
      <Image style={styles.chicken} source={require('./assets/chicken-1314888_1280.jpg')}/>
      <TouchableOpacity onPress={()=>{this.setState({count:this.state.count+1})}}>
        <Text style={styles.paragraph}>Click me</Text>
      </TouchableOpacity>
      <Text style={styles.container}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    backgroundColor: 'aqua',
    padding: 8,
    marginTop:20
  },
  paragraph: {
   
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chicken: {
    width:250,
    height:250,
    alignSelf:'center',
    marginTop:180
  }
});
