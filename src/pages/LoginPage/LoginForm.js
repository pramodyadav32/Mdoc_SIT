import { Formik } from 'formik';
import  React, {useEffect} from 'react';
 import {View, Image, Text} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Common } from '../../assets';
import {  FONT_MEDIUM, LARGE_FONT_SIZE, LIGHT_GRAY, NORMAL_FONT_SIZE, SMALL_FONT_SIZE, STANDARD_SCREEN_HEIGHT, THEME_COLOR } from '../../utils/Const';
import { SignInFormInitialValues, SignInFormValidator } from './LoginHelper';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginForm = (props) => {
    const {doLogin} = props;

    return <View style={{flex:1}} >
                 <View style={{
                    width: '100%',
                    height: RFValue(120, STANDARD_SCREEN_HEIGHT), 
                    justifyContent: 'center',
                    alignItems:'center'
                }}>
                    <Image source={Common.SPLASH_LOGIN_IMG} 
                            style={{
                                width: RFValue(160, STANDARD_SCREEN_HEIGHT), 
                                height: RFValue(80, STANDARD_SCREEN_HEIGHT), 
                                resizeMode: 'contain'
                            }} 
                            resizeMode={'contain'}>
                    </Image>
                    <Text style={{
                        fontSize: RFValue(LARGE_FONT_SIZE, STANDARD_SCREEN_HEIGHT),
                        fontFamily: FONT_MEDIUM,
                        justifyContent:'center',
                        marginTop: RFValue(10, STANDARD_SCREEN_HEIGHT)
                    }}>Log In</Text>
                </View>
                <Formik
                        initialValues={SignInFormInitialValues(props)}
                        validationSchema={SignInFormValidator(props)}
                        onSubmit={values => doLogin(values)}
                        >
                        {({values, handleChange, setFieldValue, errors, touched, setFieldTouched, isValid, handleSubmit}) => (
                            <View style={{
                                marginHorizontal: RFValue(20, STANDARD_SCREEN_HEIGHT),
                                marginTop: RFValue(8, STANDARD_SCREEN_HEIGHT)
                            }}>
                                 <TextInput
                                    label="Username"
                                    value={values.username}
                                    onChangeText={text => setFieldValue(values.username)}
                                    mode={'outlined'}
                                    theme={{ colors: { primary: THEME_COLOR,underlineColor:'transparent',}}}
                                    // left={
                                    //     <TextInput.Icon
                                    //       name={} // where <Icon /> is any component from vector-icons or anything else
                                    //       onPress={() => {}}
                                    //     />
                                    //   }
                                    />

                                    <TextInput
                                    label="Password"
                                    value={values.password}
                                    onChangeText={text => setFieldValue(values.password)}
                                    mode={'outlined'}
                                    theme={{ colors: { primary: THEME_COLOR,underlineColor:'transparent',}}}
                                    // left={
                                    //     <TextInput.Icon
                                    //       name={} // where <Icon /> is any component from vector-icons or anything else
                                    //       onPress={() => {}}
                                    //     />
                                    //   }
                                    />
                            </View>
                            
                        )}
                </Formik>
            </View>
}

export default LoginForm;