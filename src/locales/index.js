import locale from './languages';
import { loadMessages, loadCldr } from 'react-native-globalize';


const metadata = {
    locale: async function () {
        return "hi";
    },
    currency: function () {
        return "INR"
    },
    dateformat: function () {
        return "yyyyMMMdd"
    },
    messages: function () {
        loadCldr(
            // Load the locales you actually need
            require('react-native-globalize/locale-data/de'),
            require('react-native-globalize/locale-data/en'),
            require('react-native-globalize/locale-data/es'),
        );
        return  loadMessages(locale);
    }
}

export default metadata;