import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './en/en.json';
import ru from './ru/ru.json';
import ua from './ua/ua.json';

const LANGUAGES = {
    'en': en,
    'ru': ru,
    'ua': ua
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        AsyncStorage.getItem('user-language', (err, language) => {
            if (err || !language) {
                if (err) {
                    console.log('Error fetching Languages from asyncstorage ', err);
                } else {
                    console.log('No language is set, choosing English as fallback');
                }
                const findBestAvailableLanguage =
                    RNLocalize.findBestAvailableLanguage(LANG_CODES);

                callback(findBestAvailableLanguage.languageTag || 'en');
                return;
            }
            callback(language);
        });
    },
    init: () => { },
    cacheUserLanguage: language => {
        AsyncStorage.setItem('user-language', language);
    }
};

i18n
    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        resources: LANGUAGES,
        compatibilityJSON: 'v3',
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });