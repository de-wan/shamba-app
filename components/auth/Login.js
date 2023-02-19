import { useContext, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

function Login() {
    const navigation = useNavigation()
    const {isLoading, login, message} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(message)
    const submitLogin = async(e) => {
        e.preventDefault()
        
        if (email && password) {
            await login(email, password)
        }
    }

    return(
        <ScrollView style={styles.container} >
            <View style={styles.loginContainer}>
                <View style={styles.subLoginContainer}>
                    <Image
                    style={{width:100,height:70,marginTop:10, resizeMode:"contain"}}
                    source= {require('../../assets/images/logo1.png')}
                    />
                    <Text style={styles.title}>Sign In</Text>
                    <Text style={{color:'#E55451', fontWeight:'bold', fontSize:16}}>{message}</Text>
                    {isLoading && <ActivityIndicator size={'large'} color={'#000'}/>}
                    <View style={{width:"90%", height: 80, marginBottom:20}}>
                        <Text>Email Address</Text> 
                        <TextInput style={styles.inputField} placeholder='name@gmail.com' keyboardType='email-address' value={email} onChangeText={email => setEmail(email)}/>
                    </View>
                    <View style={{width:"90%", height: 80, marginBottom:20}}>
                        <Text>Password</Text>
                        <TextInput style={styles.inputField} placeholder='Enter password' textContentType='password' secureTextEntry={true} value={password} onChangeText={password => setPassword(password)}/>
                    </View>
                    <View style={{width:"90%", height: 140, justifyContent:"space-between", marginVertical:20}}>
                        <TouchableOpacity 
                            onPress={e => submitLogin(e)} 
                            id='submitBtn'
                            style={styles.button}
                        >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 15}}>Log In</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign:"center"}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 15}}>Go to Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Login;
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#3CB371"
    },    
    loginContainer: {
        flex:1,
        width:width,
        height:height,
        flexDirection:"column",
        alignItems:"center",
        paddingTop:100,
    },
    title : {
        fontSize: 24,
        fontWeight:"600",
        paddingBottom:5,
        borderBottomWidth: 1,
        marginBottom:10
    },
    subLoginContainer:{
        width:"85%",
        height:"80%",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:'#ffffff',
        borderRadius:10
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor:"#3CB371",
        borderRadius:20,
    },
    inputField: {
        width: "100%",
        height: 45,
        textAlign:"left",
        padding:10,
        marginTop:20,
        borderRadius:10,
        borderWidth: 1,
        borderColor:"#000"
    }
});