# AnimationChallange

This readme file includes the setup and run instruction for this AnimationChallange.

Here are the steps to run the project.

## Installation

Clone the Project

```bash
  git clone https://github.com/aniket-nimbark/animation-demo.git
```

Go to the project directory

```bash
  cd animation-login-demo
```

Install dependencies

```bash
  yarn
```

On iOS

```bash
  cd ios
  pod install
```

```bash
Open the ios directory of Project in the xcode.
Select the appropriate simulator.
Hit the run button.
```

On Android

```bash
Open the android directory of Project in the Android Studio.
Select the appropriate emulator.
Hit the run button.
```

Steps to build & run detox test cases for iOS

```bash
 yarn detox:build:ios
 yarn detox:test:ios
```

#### Note: Detox does not support the new React Native architecture on Android

Steps to build & run detox test cases for android

```bash
 yarn detox:build:android
 yarn detox:test:android
```

Steps to run jest test cases for LoginScreen

```bash
 yarn test LoginScreen.test.tsx
```
