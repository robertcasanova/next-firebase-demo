# Next.js SSR app hosted by Firebase

This demo run an Next.js SSR application using Firebase Functions and Firebase Hosting.

## How to use

Set up firebase:
- create a project through the [firebase web console](https://console.firebase.google.com/)
- grab the projects ID from the web consoles URL: https://console.firebase.google.com/project/<projectId>
- rename `.firebaserc.sample` in `.firebaserc` and fill *%YOUR_FIREBASE_PROJECT_ID%*

Set up next.js:
- rename `next.config.js.sample` in `next.config.js` and fill *%YOUR_FIREBASE_PROJECT_ID%*

Run:
- npm install
- npm run dev (to test locally)
- npm run firebase:deploy (to build and deploy to firebase)

## Notes

- Currently two firebase functions are used, one to handle next API Routes requests and another for SSR / static assets.
- `firebase serve` is not working, need to figure out why.
