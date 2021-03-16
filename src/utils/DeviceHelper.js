import NetInfo from "@react-native-community/netinfo";
import { Linking,Share } from "react-native";
import { AppOkAlert } from "./AlertHelper";

const DeviceHelper = {
        isConnectedToInternet: async function() {
            try{
               let state = await NetInfo.fetch(); 
               console.log('state.isConnected :- ', state.isConnected);
               return state.isConnected;
            }catch (err){
                console.log(err);
                return false;
            }
        }
}

export const makeCall = (number) => {
    let numberURL;
    if(Platform.OS != 'android'){
        numberURL = `telprompt:${number}`;
    }else {
        numberURL = `tel:${number}`;
    }
    Linking.canOpenURL(numberURL)
        .then(supported => {
            if(!supported){
                AppOkAlert("Phone number is not available",
                     () => {}, "OK", "Invalid Number")
            }else {
                return Linking.openURL(numberURL);
            }
        }).catch(err => console.log(err))
   
}

export const ShareToOtherApp = async(title, message) => {
    try {
        const result = await Share.share({
            message: message,
            title: title,
            
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        AppOkAlert("Please try again after sometime.", () => {});
    }
}

export const OpenLinkToOtherApp = (link) => {
    Linking.canOpenURL(link).then(supported => {
        if (supported) {
          Linking.openURL(link);
        } else {
          console.log("Don't know how to open URI: " + this.props.url);
        }
    });
}

export default DeviceHelper;