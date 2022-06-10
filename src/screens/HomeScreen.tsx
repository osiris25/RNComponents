import React from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MenuItem } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';


const menuItems:MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'beer-outline',
        component: 'Animation102Screen',
    },
    {
        name: 'SwitchScreen',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    }
]

export const HomeScreen = () => {

    const itemSeparator = ()=>{
        return(
            <View 
            style={{
                borderBottomWidth:1,
                opacity:0.4,
                marginVertical:8
            }}
            />
        )
    }
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='Opciones de Menú'/>}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>




    )
}
