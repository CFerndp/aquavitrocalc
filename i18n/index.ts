import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import es from "./es";
import en from "./en";

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  en,
  es,
});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

i18n.enableFallback = true;

export default i18n;
