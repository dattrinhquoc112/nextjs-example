import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import moment from "moment";

import 'moment/locale/ja' 
import 'moment/locale/fr' 

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'common',
    resources: {
      /* Load everything dynamically for two reasons:
       * - better sorting code
       * - prevent Rect HMR to reload the whole page everytime
       */
    },
    fallbackLng: "en",
    lng: "ja",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
      format: function(value, format, lng) {
        if (format === 'uppercase') {
          // Test format, works with
          // { "key2": "{{text, uppercase}} just uppercased" }
          return value.toUpperCase();
        }

        if (value instanceof Date) {
          // Example: 
          // { "key": "The current date is {{date, MM/DD/YYYY}}" }
          return moment(value).format(format);
        }
        return value;
      }
    }
  });

  i18n.on('languageChanged', function(lng) {
    moment.locale(lng);
  });

moment.locale(i18n.language)

export default i18n;