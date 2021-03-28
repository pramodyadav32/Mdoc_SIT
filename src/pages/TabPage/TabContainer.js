import  React, {useEffect} from 'react';
 import {View, Text, ImageBackground, Image} from 'react-native';
import { STANDARD_SCREEN_HEIGHT, THEME_COLOR } from '../../utils/Const';
import { Common } from '../../assets';
import { RFValue } from 'react-native-responsive-fontsize';

const TabContainer = (props) => {
    

    useEffect(() => {
    }, [])


    return <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
               
               <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems:'center'
                }}>
                    <Text>Tab</Text>
                </View>
              
        </View>
}

export default TabContainer;