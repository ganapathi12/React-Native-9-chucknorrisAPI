import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View} from 'react-native'
import {Button} from 'native-base'
import Axios from 'react-native-axios'
import User from './User'

const App=()=> {
   const [details, setDetails] = useState(null)
   const fetch=async()=>{
    try{
      const {data}=await Axios.get('https://api.chucknorris.io/jokes/random')
      const joke=data.value

      setDetails(joke)
    }catch(e){
      console.log(e)
    }
  }
   useEffect(()=>{
    fetch()
  },[])
  if(!details){
    return(
      <View style={styles.container}>
        <Text>Loading..</Text>
      </View>
    )
  }else{
    return (
    <View style={styles.container}>
        <View>
        <User details={details}/>
        <Button
        rounded
        style={styles.button}
        onPress={()=>fetch()}
        >
          <Text>New Joke</Text>
        </Button>
      </View>
    </View>
  )
  }
  
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222831"
  },
  button:{
    marginTop:30,
    paddingHorizontal:30
  },
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
})