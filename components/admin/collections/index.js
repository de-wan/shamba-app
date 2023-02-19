import { Dimensions, View } from "react-native";
import Products from "./Products";
import CollectionsScreen from "./CollectionScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const {height} = Dimensions.get('window')

const CollectionsTabs = () => {
    return(
        <View style={{flex:1, height:height}}>
            <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#fff',
                  tabBarLabelStyle: { fontSize: 12 },
                  tabBarStyle: { backgroundColor: '#3CB371' },
                }}
            >
                <Tab.Screen name="Products" component={Products} />
                <Tab.Screen name="Collection" component={CollectionsScreen} />
            </Tab.Navigator>
        </View>
    );
}

const Collections = () => {
    return(
        <CollectionsTabs/>
    )
}
export default Collections