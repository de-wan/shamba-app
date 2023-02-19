import {View, Text, Image, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function CustomMenu(props){
    const {logout, name} =  useContext(AuthContext)
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#3CB371"}}>
                <View style={{flex:1, justifyContent:"center", alignItems:'center',marginVertical:20}}>
                    <Image source={require("../assets/images/avatar.png")} style={{height:150,width:150,marginBottom:10,borderRadius:75}}/>
                    <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>{name}</Text>
                </View>
                <View style={{backgroundColor:"#fff", paddingTop:10}}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1,borderTopColor:"#ccc"}}>
                <TouchableOpacity onPress={() => logout()} style={{paddingVertical:15, flexDirection:'row', alignItems:"center"}}>
                    <Ionicons name='exit-outline' size={22}/>
                    <Text style={{fontSize:16, marginLeft:30}}>Sign Out</Text>
                </TouchableOpacity>
                <Ionicons/>
            </View>
        </View>
    )
}
