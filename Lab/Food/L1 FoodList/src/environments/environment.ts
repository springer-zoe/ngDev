// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authEnabled: false,
  title: "ngData",
  markdownPath: "/assets/markdown/",
  netcoreapi: "http://localhost:5000/",
  api: "http://localhost:3000/",
  fakeToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiY292aWQgaXMgYSBmYWtlIHBhbmRlbWljIiwiY29uY2x1c2lvbiI6Im1vc3QgcGVvcGxlIGRvbid0IGdldCB0aGlzIGZhciAtIG15IGZyaWVuZCBRdWVyZGVua2VyIn0.x_Bq_NsYKzxkixuHmFDkGtMv7RP4JprTKH2pazrmGlE",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
