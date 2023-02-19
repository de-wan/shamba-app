import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../../../assets/images/cows3.jpg')} resizeMode="cover" style={styles.image}>
            <View>
                <Image
                    style={{width:150,height:80,marginTop:10, resizeMode:"contain"}}
                    source= {require('../../../assets/images/logo1.png')}
                />
            </View>
            <View style={{width:"100%",height:160, flexDirection:'column', alignItems:"center", justifyContent:"space-between"}}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button} >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 15}}>Create Account</Text>
                </TouchableOpacity>
                <Text style={{color:"#fff",fontWeight:"bold"}}>Or</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button} >
                    <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 15}}>Log In</Text>
                </TouchableOpacity>
            </View>    
        </ImageBackground>
    );
}
export default Landing;
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        flex: 1,
        paddingVertical:55,
        justifyContent:"space-between",
        alignItems:"center"
    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor:"#3CB371",
        borderRadius:20,
    },
})
