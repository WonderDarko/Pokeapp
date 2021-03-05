// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint:{
    api: 'https://pokeapi.co/api/v2/',
    pokemon: {
      id: 'pokemon/_id_',
      name: 'pokemon/_name_'
    },
    type: {
      id: 'type/_id_'
    },
    ability: {
      id: 'ability/_id_'
    }
  },

  endpointSW:{
    api: 'https://swapi.dev/api/',
    person: {
      id: 'people/_id_/',
    }
  },

  firebaseConfig:{
    apiKey: "AIzaSyBTiEXNTkhzs5M5b-rX3wlm-1RW9JlInQM",
    authDomain: "ioniciotnodemcu-fb9d6.firebaseapp.com",
    projectId: "ioniciotnodemcu-fb9d6",
    storageBucket: "ioniciotnodemcu-fb9d6.appspot.com",
    messagingSenderId: "931017363466",
    appId: "1:931017363466:web:5f0f966cfcfde492980ff3",
    measurementId: "G-ZZZKPSB77S"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
