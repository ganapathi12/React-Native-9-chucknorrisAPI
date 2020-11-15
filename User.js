import React from 'react'
import {Text,StyleSheet} from 'react-native'
import { CardItem,H1,Card} from 'native-base'


const User=({details})=> {
    return (
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <H1 style={styles.text}>Chuck Norris Jokes API</H1>
          </CardItem >
          <CardItem bordered style={styles.cardItem}>
            <Text style={styles.text}>
              {details}
            </Text>
          </CardItem>
        </Card>
    )
}

export default User

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