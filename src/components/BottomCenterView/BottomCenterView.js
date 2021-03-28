import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { EXTRA_SMALL_FONT_SIZE, FONT_BOLD, LARGE_FONT_SIZE, STANDARD_SCREEN_HEIGHT, THEME_COLOR, WHITE_COLOR} from '../../utils/Const';

const BottomCenterView = (props) => {
    const {color, size, title, imageName, containerStyle, 
        innerContainer, iconImageSize, numberOfTabs,  index} = props;
    return <TouchableOpacity 
            key={`${index}`}
            style={[styles.innerContainer, {...innerContainer}, {width: wp('100%')/ numberOfTabs}]}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            >
            <Image source={imageName} style={{width: iconImageSize || 24, height: iconImageSize||24}} resizeMode={'contain'}/>  
            <Text style={{
                color: THEME_COLOR,
                fontFamily: FONT_BOLD,
                fontSize: RFValue(EXTRA_SMALL_FONT_SIZE, STANDARD_SCREEN_HEIGHT),
                fontStyle:'normal'
            }}>{title}</Text>   
        </TouchableOpacity>
          
}

const styles = StyleSheet.create({
    innerContainer: {
        width: RFValue(75, STANDARD_SCREEN_HEIGHT),
        height:RFValue(80, STANDARD_SCREEN_HEIGHT),
        //justifyContent: 'center',
        borderWidth: 0,
        marginTop: RFValue(16, STANDARD_SCREEN_HEIGHT),
       // borderTopLeftRadius: 10,
       // borderTopRightRadius: 10,
        alignItems: 'center',
    }
})

export default BottomCenterView;