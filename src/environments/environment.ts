// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC0AkRIrRHA5maRb6vtBugCS3ti_mjSLUk",
    authDomain: "firechat-abbf3.firebaseapp.com",
    projectId: "firechat-abbf3",
    storageBucket: "firechat-abbf3.appspot.com",
    messagingSenderId: "46089777351",
    appId: "1:46089777351:web:019bc91b704406e46c4ee2",
    measurementId: "G-QV6CP0009S"
  }
};

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
