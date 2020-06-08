# Maverick

# Initial

Make sure you have NodeJS installed
In the root run `npm install` and `yarn install`

# Android
## Android SDK

Create a `local.properties` in the `root/android` directory.
Add the line: `sdk.dir = PATH_TO_ANDROID_SDK`

- I copied/pasted from Android Studio sdk path. 


## Debug Keystore

I created a `debug.keystore` file and still got errors. [This link](https://github.com/facebook/react-native/issues/25629#issuecomment-513245590) has an answer to download the Facebook default file and you can add that to `android/app`

## Running

To build and run, use the command `yarn android`

# iOS
## Cocoapods

In the terminal, navigate to the `ios` directory. Then run the command `pod install`. This will install the dependencies in the iOS project. 


## Running

To build and run, use the command `yarn ios`


# Web

⚠️ Maverick is a Mobile app first. Running Maverick in the web may have some unusual UX/bugs that will need to be addressed later. 
Simply run `yarn web` and this should run in Chrome. 

# Metro Bundler

When making changes in your project you will not need to re-build the app every time. If you already have the app installed on a simulator/device, you can use the command `yarn start` this will run and instance of Metro Bundler and will not re-build the app on the device. 
Note: Changes like `.env` and adding npm modules will require the use of `yarn ios` and `yarn android`  to build those changes. 

