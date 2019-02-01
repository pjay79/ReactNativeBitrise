# ReactNativeBitrise

React Native Bitrise CI/CD sample with Storybook

# Screenshots

## iOS

![simulator screen shot - iphone x - 2019-02-01 at 23 01 24](https://user-images.githubusercontent.com/14052885/52122407-fd595f80-2676-11e9-9cc3-782323c87fd9.png)
![simulator screen shot - iphone x - 2019-02-01 at 22 46 44](https://user-images.githubusercontent.com/14052885/52122405-fcc0c900-2676-11e9-8f7c-3b31a6bf202c.png)
![simulator screen shot - iphone x - 2019-02-01 at 22 46 37](https://user-images.githubusercontent.com/14052885/52122404-fcc0c900-2676-11e9-86ff-50181f3d06d2.png)
![simulator screen shot - iphone x - 2019-02-01 at 22 47 00](https://user-images.githubusercontent.com/14052885/52122406-fd595f80-2676-11e9-898b-0bd0e0b788ba.png)

## Technology stack:

- react
- react-native
- react-native-config
- storybook

# Installation

## React Native setup:

Install Node.js:

https://nodejs.org/en/download/

`brew install watchman`  
`npm install -g react-native-cli`

## Project setup:

Clone the repo:  
`git clone https://github.com/pjay79/ReactNativeBitrise.git`

Change to the project folder:  
`cd ReactNativeBitrise`

Add dependencies:  
`yarn`

Add .env in project root folder:  
`IS_STORYBOOK=false`

Add .env.storybook in project root folder:  
`IS_STORYBOOK=true`

## Launch

Run on ios:  
`react-native run-ios`

Run on android:  
`react-native run-android`

Storybook UI ios  
`yarn run storybook:ios`

Storybook UI android  
`yarn run storybook:android`
