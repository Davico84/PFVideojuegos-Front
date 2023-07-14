import { View, Text,StyleSheet } from 'react-native'
import { useDispatch } from "react-redux";
import {useState} from 'react'

import { Searchbar } from 'react-native-paper';
import {getvGamebyName,getvideoGames} from "../../../redux/videogamesActions"

const SearchBar = (props) => {

    const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState('');

    //funcion de busqueda

    const onChangeSearch = (query) => {
          setSearchQuery(query);
          console.log("estas bsucando",query) 
          }



    const onCloseSearch = () => {
        // console.log("limpiando valores de busqueda");
        setSearchQuery("");
        dispatch(getvideoGames()) ;
      }


      function handleSubmit() {
         dispatch(getvGamebyName(searchQuery));
      }


    return (
        // <View style={[styles.Container, isDarkMode && styles.DarkContainer]}>
          <View style={[styles.Container,]}>
          <Searchbar
            autoFocus={true}
            placeholder={"Search"}
            onChangeText={onChangeSearch}
            onIconPress={handleSubmit}
            onClearIconPress={onCloseSearch}
            value={searchQuery}
            inputStyle={[styles.SearchbarText, ]}
            style={[styles.Searchbarfondo,]}
            iconColor={'#0000ff'}
            placeholderTextColor={'#000000'}
          />
        </View>
      )
}
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Agrega esta línea
    width: '85%',
    flexDirection: 'row',
    
    left: -20
  },
  
    Searchbarfondo:{
        marginLeft:'5%', 
        height: 40,
        width:'90%',
        borderWidth:3,
        // backgroundColor: color_azul,
        // borderColor: color_blanco,
        alignContent:'center'
        
    }
    
    ,SearchbarText:{
        fontSize:25,
        // color:color_blanco,
        alignSelf: 'center',
        fontWeight:'bold'

    },
})
export default SearchBar